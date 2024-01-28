/*

Listen for event when login succeeded and get the locale, if not available set to en-US. Dont use DomContentLoaded listener, make custom because dom loads too soon. 
Issue: Can't find out if Local Storage item stops existing, needs some kind of safety measure.

*/


const config = {
    "en-US": {
        "name" : "English",
        "icon" : "src",
    },
    "en-ES": {
        "name" : "Español",
        "icon" : "src",
    }
}