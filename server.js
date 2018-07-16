const fs = require('fs');
const express = require('express');
const bodyParser = require("body-parser");

const DICTIONARY_TEXT = JSON.parse(fs.readFileSync('storage/dictionaries.json', 'utf8'));
const mockData = JSON.parse(fs.readFileSync('storage/data.json', 'utf8'));
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (request, response) {
    response.sendfile('./public/index.html');
});

app.post("/help/search/friends", function (req, res) {
    console.log('lol');

    let searchStr = req.body.str;
    let maxNumberItems = req.body.maxNumberItems;
    let result = [];

    for (let i = 0; i < mockData.length && i < maxNumberItems; i++) {
        if (searchFilter(mockData[i], searchStr))
            result.push([
                mockData[i].id,
                mockData[i].first_name + ' ' + mockData[i].last_name,
                mockData[i].university_name || '',
                mockData[i].photo_50
            ]);
    }

    res.status(200).send(JSON.stringify(result));
});

var port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log("Listening on " + port);
});

function getAllSpeciesStr(str) {
    var result = [str];
    var revert = '';

    var isEnglish = isENGKeyboard(str);

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

        return result;
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

        return result;
    }

    function convertTranslit(str, isFromЕNG) {
        let result = str;

        DICTIONARY_TEXT.currentLanguage.translit.forEach(pair => {
            const pairArray = pair.split(':');
            result = result.replace(new RegExp(isFromЕNG ? pairArray[1] : pairArray[0], 'g'), isFromЕNG ? pairArray[0] : pairArray[1]);
        });

        return result;
    }

    function isENGKeyboard(str) {
        for (let i = 0; i < str.length; i++) {
            if (DICTIONARY_TEXT.currentLanguage["to-EN"][str[i]])
                return false;
            else if (DICTIONARY_TEXT.currentLanguage["en-TO"][str[i]])
                return true;
            else
                continue;
        }

        return null;
    }
}

function getSearchStrRegExp(strings) {
    let pattern = '';

    for (let i = 0; i < strings.length; i++)
        pattern += escapeRegExp(strings[i]) + "|";

    pattern = pattern.slice(0, -1);

    return new RegExp(pattern, 'gi');
}

function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function searchFilter(item, searchStr) {
    let stringsByKeyboardLayout = getAllSpeciesStr(searchStr);
    let regExp = getSearchStrRegExp(stringsByKeyboardLayout);

    if (regExp.test(item.first_name + item.last_name)
        || regExp.test(item.university_name)
        || regExp.test(item.domain))
        return true;
    else
        return false;
}