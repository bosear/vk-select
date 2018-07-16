;(function () {
    const selects = {};
    const VKSelect = {};
    const defaultParams = { // default for select user
        multiselect: true,
        autocomplete: true,
        fetch: true,
        avatars: true,
        placeholder: "Введите имя пользователя или идентификатор",
        addTextBtn: "Добавить",
        maxNumberItems: 20,
        emptyItemText: "Пользователь не найден",
        getUrlImg: function () {
            return '';
        },
        getText: function () {
            return '';
        },
        getSubtext: function () {
            return '';
        },
        onSelect: function () {
        },
        onRemove: function () {
        }
    };

    // inner private class

    class Select {

        constructor(id, params) {
            this.id = id;
            this.params = params;
            this.hoverItem = null;
            this.hoverItemElement = null;
            this.selectedItemsMap = {};

            this._constructSelectElement();
        }

        selectItem(item) {
            let selectedItemElement = this._createSelectedItemElement(item);
            this.selectedItemsElement.appendChild(selectedItemElement);
            this.params.selectedItems.push(item);
            this.selectedItemsMap[item.id] = true;

            if (this.selectedItemsElement.style.display === 'none') {
                this.selectedItemsElement.style.display = 'block';
            }

            if (this.searchElement.value) {
                this.searchElement.value = '';
                this.searchElement.blur();
            }

            if (!this.params.multiselect)
                this.arrowBtn.style.cursor = 'default';

            this._updateList('');
        };

        removeItem(removedItem) {
            this.params.selectedItems.forEach((selectedItem, idxSelectedItem) => {
                if (selectedItem.id === removedItem.id) {
                    let selectedItemElement = this.selectedItemsElement.children[idxSelectedItem];
                    this.selectedItemsElement.removeChild(selectedItemElement);
                    this.params.selectedItems.splice(idxSelectedItem, 1);
                    delete this.selectedItemsMap[removedItem.id];

                    if (!this.params.selectedItems.length) {
                        this._hideAdditionalBtn();

                        if (this.searchElement.style.display === 'none') {
                            this._showSearchElement();
                        }
                    }

                    if (!this.params.multiselect)
                        this.arrowBtn.style.cursor = 'pointer';

                    this._updateList('');
                }
            });
        };

        getItemById(id) {
            for (let i = 0; i < this.params.items.length; i++)
                if (this.params.items[i].id == id)
                    return this.params.items[i];

            return null;
        };

        setHover(item, itemElement, withScrolling) {
            if (!item || !itemElement) {
                this.hoverItemElement = null;
                this.hoverItem = null;

                return;
            }

            this.hoverItemElement && this.hoverItemElement.classList.remove('vk-select-item_hover');
            this.hoverItemElement = itemElement;
            this.hoverItem = item;
            itemElement.classList.add('vk-select-item_hover');

            if (withScrolling) {
                let difference = itemElement.offsetTop + itemElement.offsetHeight - (this.bodySelectElement.offsetHeight + this.bodySelectElement.scrollTop);

                if (difference > 0) {
                    this.bodySelectElement.scrollTop += difference;
                    return;
                }

                difference = this.bodySelectElement.scrollTop - itemElement.offsetTop;

                if (difference > 0)
                    this.bodySelectElement.scrollTop -= (difference - 1); // 1px for border
            }

        };

        _createSelectedItemElement(item) {
            let selectedItem = document.createElement('div');
            selectedItem.classList.add('vk-select__selected-item');
            selectedItem.classList.add('vk-select_direction_left');
            selectedItem.classList.add('vk-select_clear-fix');
            selectedItem.classList.add('vk-tag');

            let layoutElement = document.createElement('div');
            layoutElement.classList.add('vk-tag__layout');
            layoutElement.classList.add('vk-tag__layout_type_simple');
            layoutElement.classList.add('vk-select_clear-fix');

            let textElement = document.createElement('span');
            textElement.classList.add('vk-tag__text');
            textElement.classList.add('vk-select_direction_left');
            textElement.innerText = this.params.getText.call(item);

            let removeBtn = document.createElement('span');
            removeBtn.classList.add('vk-tag__btn');
            removeBtn.classList.add('vk-select_direction_right');
            removeBtn.classList.add('vk-tag__btn_type_remove');
            removeBtn.addEventListener('mousedown', (event) => {
                this.removeItem(item);
                this.params.onRemove && typeof this.params.onRemove === "function" && this.params.onRemove(item);

                event.stopPropagation();
            });

            layoutElement.appendChild(textElement);
            layoutElement.appendChild(removeBtn);
            selectedItem.appendChild(layoutElement);

            return selectedItem;
        }

        _constructSelectElement() {
            this.select = document.getElementById(this.id);

            if (!this.select)
                throw new Error(`id (${this.id}) родительского узла для dropdown-a не найден`);

            this._constructHeaderElement();
            this._constructBodyElement();

            this.select.appendChild(this.headerSelectElement);
            this.select.appendChild(this.bodySelectElement);

            this._hideList();
            this._updateList();
        }


        _constructHeaderElement() {
            let header = document.createElement('div');
            header.classList.add('vk-select__header');
            header.classList.add('vk-select_clear-fix');
            header.addEventListener('click', this._onClickHeader.bind(this));

            let arrowBtn = document.createElement('div');
            arrowBtn.classList.add('vk-select__arrow');
            arrowBtn.classList.add('vk-select_direction_right');
            arrowBtn.addEventListener('click', this._onClickArrowBtn.bind(this));
            header.appendChild(arrowBtn);

            let selectedItems = document.createElement('div');
            selectedItems.classList.add('vk-select__selected-items');
            header.appendChild(selectedItems);

            let addBtn = document.createElement('div');
            addBtn.classList.add('vk-select__add-button'); // params.addTextBtn
            addBtn.classList.add('vk-select_direction_left');
            addBtn.classList.add('vk-select_clear-fix');
            addBtn.classList.add('vk-tag');
            addBtn.innerHTML = this._getAdditionalBtnTemplate(true);
            addBtn.addEventListener('click', this._onClickAddBtn.bind(this));
            header.appendChild(addBtn);

            let searchElement = document.createElement('input');
            searchElement.setAttribute('type', 'text');
            searchElement.setAttribute('placeholder', this.params.placeholder);
            searchElement.classList.add('vk-select__search');
            searchElement.classList.add('vk-select_direction_left');
            searchElement.addEventListener('focus', this._onFocusSearchElement.bind(this));
            searchElement.addEventListener('blur', this._onBlurSearchElement.bind(this));
            searchElement.addEventListener('input', this._onInputSearchElement.bind(this));
            searchElement.addEventListener('keydown', this._onKeydownSearchElement.bind(this));
            header.appendChild(searchElement);

            this.addBtn = addBtn;
            this.arrowBtn = arrowBtn;
            this.headerSelectElement = header;
            this.selectedItemsElement = selectedItems;
            this.searchElement = searchElement;

            if (this.params.selectedItems.length) {
                for (let i = 0; i < this.params.selectedItems.length; i++)
                    this.selectItem(this.params.selectedItems[i]);
            }
            else {
                this.selectedItemsElement.style.display = 'none';
                this._hideAdditionalBtn();
            }
        }

        _constructBodyElement() {
            let bodyElement = document.createElement('div');
            bodyElement.classList.add('vk-select__body');

            this.bodySelectElement = bodyElement;
            this.displayedItems = {};
        }

        _onClickAddBtn() {
            this._showSearchElement();
            this._hideAdditionalBtn();

            this.searchElement.focus();
        }

        _onClickHeader(event) {
            if (event.target !== event.currentTarget || this.params.selectedItems.length && !this.params.multiselect)
                return;

            this._onClickAddBtn();
        }

        _onClickArrowBtn(event) {
            if (this.params.selectedItems.length && !this.params.multiselect)
                return;

            this._onClickAddBtn();
            event.stopPropagation();
        }

        _getAdditionalBtnTemplate() {
            return `
                <div class="vk-tag__layout vk-tag__layout_type_add-btn vk-select_clear-fix">
                    <span class="vk-tag__text vk-select_direction_left">${this.params.addTextBtn}</span>
                    <span class="vk-tag__btn vk-tag__btn_type_plus vk-select_direction_right"></span>
                </div>
            `;
        }

        _showAdditionalBtn() {
            this.addBtn.style.display = 'block';
        }

        _hideAdditionalBtn() {
            this.addBtn.style.display = 'none';
        }

        _showSearchElement() {
            this.searchElement.style.display = 'block';
        }

        _hideSearchElement() {
            this.searchElement.style.display = 'none';
        }

        _showList() {
            this.bodySelectElement.style.display = 'block';

            let itemId = this.bodySelectElement.children[0].getAttribute('data-id');
            this.setHover(this.displayedItems[itemId], this.bodySelectElement.children[0], true);
        }

        _hideList() {
            this.bodySelectElement.style.display = 'none';
        }

        _onFocusSearchElement() {
            this._showList();
            this.select.classList.add('vk-select_focused');
        }

        _onBlurSearchElement(event) {
            if (this.params.selectedItems.length && !this.searchElement.value) {
                this._hideSearchElement();

                if (this.params.multiselect)
                    this._showAdditionalBtn();
            }

            this._hideList();
            this.headerSelectElement.addEventListener('click', this._onClickHeader.bind(this));
            this.select.classList.remove('vk-select_focused');
        }

        _onInputSearchElement(event) {
            let value = this.searchElement.value;
            this._updateList(value);
        }

        _onKeydownSearchElement(event) {
            let item;

            switch (event.keyCode) {
                case 40: // DOWN
                    if (!this.hoverItemElement || !this.hoverItemElement.nextElementSibling)
                        return;

                    item = this.getItemById(this.hoverItemElement.nextElementSibling.getAttribute('data-id'));
                    this.setHover(item, this.hoverItemElement.nextElementSibling, true);
                    return;
                case 38: // UP
                    if (!this.hoverItemElement || !this.hoverItemElement.previousElementSibling)
                        return;

                    item = this.getItemById(this.hoverItemElement.previousElementSibling.getAttribute('data-id'));
                    this.setHover(item, this.hoverItemElement.previousElementSibling, true);
                    return;
                case 13: // ENTER
                    let itemId = this.hoverItemElement && this.hoverItemElement.getAttribute('data-id');
                    if (itemId) {
                        VKSelect.select(this.id, itemId);
                        this.searchElement.blur();
                    }

                    return;
                case 27: // ESC
                    this.searchElement.blur();
                    return;
            }
        }

        _updateList(searchStr) {
            searchStr = this._trim(searchStr);
            this.listHtml = this._constructList(this.params.items, searchStr);

            if (this.params.fetch && !this.onPendingResponse) {
                if (this.listHtml)
                    this._insertList(this.listHtml);

                this.onPendingResponse = true;
                let xhr = new XMLHttpRequest();
                xhr.open('POST', this.params.url, true);
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                xhr.onload = () => {
                    if (xhr.status !== 200) {
                        if (!this.listHtml)
                            this.listHtml = this._getEmptyTemplateItem();

                        this.onPendingResponse = false;
                        this._insertList(this.listHtml);
                        console.log("Ошибка " + event.target.status + " получена во время загрузки данных select-элемента с id: " + this.id + '. ' + xhr.statusText);

                        return this.listHtml;
                    }

                    this.onPendingResponse = false;
                    let items = JSON.parse(xhr.responseText); // should be array
                    if (items.length)
                        this.listHtml += this._constructList(items, searchStr, true);

                    if (!this.listHtml)
                        this.listHtml = this._getEmptyTemplateItem();

                    this._insertList(this.listHtml);
                };

                xhr.onerror = (event) => {
                    if (!this.listHtml)
                        this.listHtml = this._getEmptyTemplateItem();

                    this.onPendingResponse = false;
                    this._insertList(this.listHtml);
                    console.log("Ошибка " + event.target.status + " получена во время загрузки данных select-элемента с id: " + this.id + '. ' + xhr.statusText);
                };

                let data = JSON.stringify({
                    str: searchStr.toLowerCase(),
                    maxNumberItems: this.params.maxNumberItems
                });

                xhr.send(data);
            } else {
                if (!this.listHtml && this.params.fetch && this.onPendingResponse)
                    return;
                else if (!this.listHtml)
                    this.listHtml = this._getEmptyTemplateItem();

                this._insertList(this.listHtml);
            }
        }

        _constructList(currentItems, searchStr, isFetch) {
            let list = '', countDisplayedItems = 0, matchObj;

            if (isFetch) {
                countDisplayedItems = Object.keys(this.displayedItems).length;

                for (let i = 0; countDisplayedItems < this.params.maxNumberItems && i < currentItems.length; i++) {
                    if (this.displayedItems[currentItems[i][0]] || this.selectedItemsMap[currentItems[i][0]])
                        continue;

                    matchObj = {
                        id: currentItems[i][0],
                        text: currentItems[i][1],
                        subtext: currentItems[i][2],
                        srcText: currentItems[i][1],
                        srcSubtext: currentItems[i][2],
                        urlImg: currentItems[i][3]
                    };
                    matchObj = this._highlightFilterBySearchStr(matchObj, searchStr);

                    list += this._getListTemplateItem(matchObj); // TODO naming
                    this.displayedItems[currentItems[i][0]] = this.getItemById(currentItems[i][0]);
                    ++countDisplayedItems;
                }

                return list;
            }

            this.displayedItems = {};
            if (!searchStr)
                for (let i = 0; countDisplayedItems < this.params.maxNumberItems && i < currentItems.length; i++) {
                    if (this.selectedItemsMap[currentItems[i].id])
                        continue;

                    matchObj = {
                        id: currentItems[i].id,
                        text: this.params.getText.call(currentItems[i]),
                        subtext: this.params.getSubtext.call(currentItems[i]),
                        srcText: this.params.getText.call(currentItems[i]),
                        srcSubtext: this.params.getSubtext.call(currentItems[i]),
                        urlImg: this.params.getUrlImg.call(currentItems[i])
                    };

                    list += this._getListTemplateItem(matchObj);
                    this.displayedItems[currentItems[i].id] = currentItems[i];

                    ++countDisplayedItems;
                }
            else
                for (let i = 0; countDisplayedItems < this.params.maxNumberItems && i < currentItems.length; i++) {
                    if (this.selectedItemsMap[currentItems[i].id])
                        continue;

                    let text = this.params.getText.call(currentItems[i]);
                    let subtext = this.params.getSubtext.call(currentItems[i]);

                    matchObj = {
                        id: currentItems[i].id,
                        text: this.params.getText.call(currentItems[i]),
                        subtext: this.params.getSubtext.call(currentItems[i]),
                        srcText: this.params.getText.call(currentItems[i]),
                        srcSubtext: this.params.getSubtext.call(currentItems[i]),
                        urlImg: this.params.getUrlImg.call(currentItems[i])
                    };

                    matchObj = this._highlightFilterBySearchStr(matchObj, searchStr);

                    if (matchObj.text !== text || matchObj.subtext !== subtext) {
                        list += this._getListTemplateItem(matchObj); // TODO naming
                        this.displayedItems[currentItems[i].id] = currentItems[i];
                        ++countDisplayedItems;
                    }
                }

            return list;
        }

        _insertList(listHtml) {
            this.bodySelectElement.innerHTML = listHtml;

            let itemId = this.bodySelectElement.children[0].getAttribute('data-id');
            this.setHover(this.displayedItems[itemId], this.bodySelectElement.children[0], true);
        }

        _getEmptyTemplateItem() {
            return `
                <div class="vk-select-item vk-select-item_type_empty vk-select_clear-fix">
                    <div class="vk-select-item__info vk-select_direction_left">
                        <div class="vk-select-item__text vk-select-item__text_type_empty">${this.params.emptyItemText}</div>
                    </div>
                </div>
            `;
        }

        _getListTemplateItem(matchObj) {
            if (this.params.avatars)
                return `<div class="vk-select-item vk-select_clear-fix" data-id=${matchObj.id} onmouseover="VKSelect.hover('${this.id}', ${matchObj.id}, event)" onmousedown="VKSelect.select('${this.id}', ${matchObj.id}, event)">
                            <img class="vk-select-item__photo vk-select_direction_left"
                                 src="${matchObj.urlImg}" alt="${matchObj.srcText}">
                            <div class="vk-select-item__info">
                                <div class="vk-select-item__text">${matchObj.text}</div>
                                <div class="vk-select-item__subtext">${matchObj.subtext}</div>
                            </div>
                        </div>`;
            else
                return `<div class="vk-select-item vk-select_clear-fix" data-id=${matchObj.id} onmouseover="VKSelect.hover('${this.id}', ${matchObj.id}, event)" onmousedown="VKSelect.select('${this.id}', ${matchObj.id}, event)">
                            <div class="vk-select-item__info">
                                <div class="vk-select-item__text">${matchObj.text}</div>
                                <div class="vk-select-item__subtext">${matchObj.subtext}</div>
                            </div>
                        </div>`;
        }

        _highlightFilterBySearchStr(matchObj, searchStr) {
            let stringsByKeyboardLayout = this._getAllSpeciesStrByKeyboard(searchStr.toLowerCase());
            let regExp = this._getSearchStrRegExp(stringsByKeyboardLayout);

            matchObj.text = matchObj.text.replace(regExp, '<span class="vk-select_highlighted">$1</span>');
            matchObj.subtext = matchObj.subtext.replace(regExp, '<span class="vk-select_highlighted">$1</span>');

            return matchObj;
        }

        _getSearchStrRegExp(strings) {
            let pattern = '(';

            for (let i = 0; i < strings.length; i++)
                pattern += this._escapeRegExp(strings[i]) + "|";

            pattern = pattern.slice(0, -1) + ")";

            return new RegExp(pattern, 'gi');
        }

        _escapeRegExp(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        }

        _trim(str) {
            return (str || "").replace(/^\s+|\s+$/g, "");
        }

        _getAllSpeciesStrByKeyboard(str) {
            var result = [str];
            var revert = '';

            var isEnglish = isEnglishKeyboard(str);

            if (isEnglish == null)
                return [str, str, str, str];
            else if (isEnglish) {
                for (let i = 0; i < str.length; i++) {
                    if (DICTIONARY_TEXT.currentLanguage["en-TO"][str[i]])
                        revert += DICTIONARY_TEXT.currentLanguage["en-TO"][str[i]];
                    else
                        revert += str[i];
                }

                result.push(revert);

                var fromTranslit = convertTranslit(revert, false);
                result.push(fromTranslit);

                fromTranslit = convertTranslit(str, true);
                result.push(fromTranslit);
            } else {
                for (let i = 0; i < str.length; i++) {
                    if (DICTIONARY_TEXT.currentLanguage["to-EN"][str[i]])
                        revert += DICTIONARY_TEXT.currentLanguage["to-EN"][str[i]];
                    else
                        revert += str[i];
                }

                result.push(revert);

                var toTranslit = convertTranslit(revert, true);
                result.push(toTranslit);

                toTranslit = convertTranslit(str, false);
                result.push(toTranslit);
            }

            return result;

            function convertTranslit(str, isFromEnglish) {
                let result = str;

                DICTIONARY_TEXT.currentLanguage.translit.forEach(pair => {
                    const pairArray = pair.split(':');
                    result = result.replace(new RegExp(isFromEnglish ? pairArray[1] : pairArray[0], 'g'), isFromEnglish ? pairArray[0] : pairArray[1]);
                });

                return result;
            }

            function isEnglishKeyboard(str) {
                for (let i = 0; i < str.length; i++) {
                    if (DICTIONARY_TEXT.currentLanguage["to-EN"][str[i]])
                        return false;
                    else if (DICTIONARY_TEXT.currentLanguage["en-TO"][str[i]])
                        return true;
                }

                return null;
            }
        }
    }

    VKSelect.createSelect = function (id, params) {
        params = {
            multiselect: params.multiselect == undefined ? defaultParams.multiselect : params.multiselect,
            autocomplete: params.autocomplete == undefined ? defaultParams.autocomplete : params.autocomplete,
            fetch: params.fetch == undefined ? defaultParams.fetch : params.fetch,
            url: params.url || '',
            avatars: params.avatars == undefined ? defaultParams.avatars : params.avatars,
            placeholder: params.placeholder || defaultParams.placeholder,
            addTextBtn: params.addTextBtn || defaultParams.addTextBtn,
            items: params.items || [], // ???
            selectedItems: params.selectedItems || [],
            maxNumberItems: params.maxNumberItems || defaultParams.maxNumberItems,
            emptyItemText: params.emptyItemText || defaultParams.emptyItemText,
            getUrlImg: params.getUrlImg || defaultParams.getUrlImg,
            getText: params.getText || defaultParams.getText,
            getSubtext: params.getSubtext || defaultParams.getSubtext,
            onSelect: params.onSelect || defaultParams.onSelect,
            onRemove: params.onRemove || defaultParams.onRemove
        };
        let select = new Select(id, params);
        selects[select.id] = select;
    };

    VKSelect.getSelectById = function (id) {
        return selects[id];
    };

    VKSelect.select = function (idSelect, idItem) {
        let item = selects[idSelect].getItemById(idItem);
        selects[idSelect].selectItem(item);
    };

    VKSelect.hover = function (idSelect, idItem, event) {
        if (selects[idSelect].hoverItem.id == idItem)
            return;
        selects[idSelect].setHover(selects[idSelect].getItemById(idItem), event.currentTarget);
    };

    window.VKSelect = VKSelect;
}());
