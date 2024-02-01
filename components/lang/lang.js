/*

Listen for event when login succeeded and get the locale, if not available set to en-US. Dont use DomContentLoaded listener, make custom because dom loads too soon. 
Issue: Can't find out if Local Storage item stops existing, needs some kind of safety measure.

*/
import en_US from '../../components/lang/languages/en_US.js';
import es_ES from '../../components/lang/languages/es_ES.js';

const config = {
    "en_US": {
        "name" : "English",
        "icon" : "https://blockly-for-discord.xyz/components/svg/country-flags/uk.svg",
    },
    "en_ES": {
        "name" : "Español",
        "icon" : "https://blockly-for-discord.xyz/components/svg/country-flags/spain.svg",
    }
}


function test () {
    console.log(en_US);
}
window.lang = test
