/*

Listen for event when login succeeded and get the locale, if not available set to en-US. Dont use DomContentLoaded listener, make custom because dom loads too soon. 
Issue: Can't find out if Local Storage item stops existing, needs some kind of safety measure.


*/


// import everything from lang.js so we dont have to add each import here.

import * as lang from './languages.js';

const config = {
    "en_US": {
        "name" : "English",
        "icon" : "https://blockly-for-discord.xyz/components/svg/country-flags/uk.svg",
    },
    "en_ES": {
        "name" : "Español",
        "icon" : "https://blockly-for-discord.xyz/components/svg/country-flags/spain.svg",
    },
    "nl_NL": {
        "name" : "Nederlands",
        "icon" : ""
    }
}

console.log(lang.es_ES);

// Automatic Page translation
function AutoTranslate (language) {

}

window.AutoTranslate = AutoTranslate

// Get a certain key value for id in a language file
function GetTranslation (language, id) {

}

window.GetTranslation = GetTranslation

function DefineLocale (language) {
    localStorage.setItem('locale', language);
}

window.DefineLocale = DefineLocale