const countDisplayedItems = 20;

let sidebar = document.querySelector('.vk-select-demo-sidebar');
sidebar.innerHTML = getSidebarItemsTemplate(mockData);

VKSelect.createSelect('test-select1', {
    items: mockData,
    multiselect: true,
    avatars: true,
    fetch: false,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select2', {
    items: mockData,
    multiselect: false,
    avatars: true,
    fetch: false,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select3', {
    items: mockData,
    multiselect: true,
    avatars: false,
    fetch: false,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select4', {
    items: mockData,
    multiselect: false,
    avatars: false,
    fetch: false,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});


VKSelect.createSelect('test-select5', {
    items: mockData,
    multiselect: true,
    avatars: true,
    fetch: true,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select6', {
    items: mockData,
    multiselect: false,
    avatars: true,
    fetch: true,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select7', {
    items: mockData,
    multiselect: true,
    avatars: false,
    fetch: true,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

VKSelect.createSelect('test-select8', {
    items: mockData,
    multiselect: false,
    avatars: false,
    fetch: true,
    url: "/help/search/friends",
    maxNumberItems: countDisplayedItems,
    getText: function () {
        return this.first_name + ' ' + this.last_name;
    },
    getSubtext: function () {
        return this.university_name || '';
    },
    getUrlImg: function () {
        return this.photo_50;
    }
});

function getSidebarItemsTemplate(items) {
    let html = getSidebarTitleTemplate();

    for (let i = 0; i < countDisplayedItems && i < items.length; i++)
        html += getSidebarItemTemplate(items[i]);

    return html;
}

function getSidebarTitleTemplate() {
    return `
        <div class="vk-select-demo-sidebar-item vk-select-demo-sidebar-item_type_title vk-select_clear-fix">
            <div class="vk-select-demo-sidebar-item__info vk-select-demo-sidebar-item_direction_left">
                <div class="vk-select-demo-sidebar-item__text vk-select-demo-sidebar-item__text_type_empty">All users</div>
            </div>
        </div>
    `;
}

function getSidebarItemTemplate(item) {
    return `<div class="vk-select-demo-sidebar-item vk-select_clear-fix">
                <img class="vk-select-demo-sidebar-item__photo vk-select_direction_left"
                     src="${item.photo_50}" alt="${item.first_name + ' ' + item.last_name}">
                <div class="vk-select-demo-sidebar-item__info">
                    <div class="vk-select-demo-sidebar-item__text">${item.first_name + ' ' + item.last_name + ' | ' + item.domain}</div>
                    <div class="vk-select-demo-sidebar-item__subtext">${item.university_name || ''}</div>
                </div>
            </div>`;
}