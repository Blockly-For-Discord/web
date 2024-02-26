/*

Made and Maintained by Blockly For Discord. Any Modification is prohibited and could lead to faulty behaviour of the site - v0.5.6

*/

import { HomeInit } from '../dashboard/home.js';
import { HomeSwitch } from '../dashboard/home.js';
window.HomeSwitch = HomeSwitch;
window.HomeInit = HomeInit;


let CurrentActiveSite = 'no_site';
const router = {
    "" : {
        "dest" : "s-home",
        "function" : "HomeInit",
        "switch" : "HomeSwitch",
    },
    // 404 - routes when no other match is found
    "404" : {
        "dest" : "https://",
        "function" : "Init404",
        "switch" : "End404",
    }
}

const TranslateIconToRouter = {
    "s-home":""
}
document.addEventListener('DOMContentLoaded', function () {
    AuthEvent();
});


// Router on first Page Load
document.addEventListener('AuthConfirmed', function() {
    const pathArray = window.location.pathname.split('/');
    const PathOnload = pathArray[2] ? pathArray[2].toLowerCase() : "";
    
    const query = window.location.search;

    if (PathOnload in router) {

        const FunctionToRun = router[PathOnload].function;

        if (typeof window[FunctionToRun] === "function") {


            // Set loading screen
            window[FunctionToRun](query);
            CurrentActiveSite = PathOnload;
            const element = document.getElementById(router[PathOnload].dest);
            element.classList.add("action-item-active");

        } else { console.error("[Router] Couldn't find Initiator for " + PathOnload) };

    } else {

        const FunctionToRun = router["404"].function;

        if (typeof window[FunctionToRun] === "function") {

            window[FunctionToRun]();
        } else { console.error("[Router] Couldn't find Initiator for 404") };
    };
    

  });


// Router on page switch

async function SwitchPage (to) {

    if (CurrentActiveSite == 'no_site') {

        const switchToFunction = router[to].function;

                const query = window.location.search;

                if (typeof window[switchToFunction] === 'function') {
                    window[switchToFunction](query);
                }

    } else {
        const switchFunction = router[CurrentActiveSite].switch;

        if (typeof window[switchFunction]  === 'function') {

            window[switchFunction]();

            const response = await window[switchFunction]();
            console.log(response);
            if (router[to]) {
                const switchToFunction = router[to].function;

                const query = window.location.search;

                if (typeof window[switchToFunction] === 'function') {
                    window[switchToFunction](query);
                }

            }

        } else {

            console.error("[Router] Couldn't find function " + switchFunction + "();");

        }

    }
}

function InitLoadScreen () {

}


function InitLoadBar () {

}


function IconPageLoader (to) {

    const item = TranslateIconToRouter[to];
    SwitchPage(item);
}

window.IconPageLoader = IconPageLoader;
