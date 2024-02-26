/*

Made and Maintained by Blockly For Discord. Any Modification is prohibited and could lead to faulty behaviour of the site - v0.5.6

*/

import { HomeInit } from '../dashboard/home.js';
import { HomeSwitch } from '../dashboard/home.js';
window.HomeSwitch = HomeSwitch;
window.HomeInit = HomeInit;


let CurrentPage = 'none';

const router = {
    "" : {
        "dest" : "s-home",
        "function" : "HomeInit",
        "switch" : "HomeSwitch",
        "icon" : "s-home",
        "class" : "action-item-active"
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

document.addEventListener('AuthConfirmed', function() {
    LoadPage(page);
});


async function LoadPage(page) {

    const query = window.location.search;

    if (CurrentPage === 'none') {

        if (FunctionExists(router[page].function)) {

            window[router[page].function](query);
            SidebarHighlight(page);

        } else {
            console.error("[Router] No Function for " + page + " was found")
        }



    } else {

        if (FunctionExists(router[page].switch)) {

            const response = await window[router[page].function](query);

            if (FunctionExists(router[page].function)) {

                window[router[page].function](query);
                SidebarHighlight(page);

            } else {
                console.error("[Router] No Function for " + page + " was found")
            }

        } else {
            console.error("[Router] No Switch Function for " + page + " was found")
        }
    }   
}


function FunctionExists(func) {


    let result = typeof window[func] === "function" ? true : false;

    return result;
}

function SidebarHighlight(page) {

    let IconElement = document.getElementById(router[page].icon);
    let IconClass = router[page].class;

    for (let key in router) {
        let DisableClass = router[key].class;

        let element = document.getElementById(router[key].icon);
        if (element) {
            element.classList.remove(DisableClass);
        }
    }

    if (IconElement) {
        IconElement.classList.add(IconClass);
    }
    
}



/*
document.addEventListener('AuthConfirmed', function() {
    const pathArray = window.location.pathname.split('/');
    const PathOnload = pathArray[2] ? pathArray[2].toLowerCase() : "";
    
    const query = window.location.search;

    if (PathOnload in router) {

        const FunctionToRun = router[PathOnload].function;

        if (typeof window[FunctionToRun] === "function") {


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
    console.log("Icon Page Translator: " + item)
    SwitchPage(item);
}

window.IconPageLoader = IconPageLoader; */
