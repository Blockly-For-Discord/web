/*

Made and Maintained by Blockly For Discord. Any Modification is prohibited and could lead to faulty behaviour of the site - v0.5.6

*/

import { HomeInit } from '../dashboard/home.js';
import { HomeSwitch } from '../dashboard/home.js';
window.HomeSwitch = HomeSwitch;
window.HomeInit = HomeInit;
import { Init404 } from '../dashboard/404.js';
import { Switch404 } from '../dashboard/404.js';
window.Switch404 = Switch404;
window.Init404 = Init404;
import { SettingsInit } from '../dashboard/settings.js';
import { SettingsSwitch } from '../dashboard/settings.js';
window.SettingsInit = SettingsInit;
window.SettingsSwitch = SettingsSwitch;


let CurrentPage = 'none';

let items = ["s-home", "s-projects", "s-explore", "s-users", "s-extensions", "s-updates", "s-developer", "s-settings"];

const router = {
    "" : {
        "function" : "HomeInit",
        "switch" : "HomeSwitch",
        "icon" : "s-home",
        "class" : "action-item-active"
    },
    "settings" : {
        "function" : "SettingsInit",
        "switch" : "SettingsSwitch",
        "icon" : "s-settings",
        "class" : "action-item-settings"
    },
    // 404 - routes when no other match is found
    "404" : {
        "function" : "Init404",
        "switch" : "End404",
        "icon" : "",
        "class" : ""
    }
}


document.addEventListener('DOMContentLoaded', function () {
    AuthEvent();

    items.forEach(item => {
        document.getElementById(item).addEventListener('click', function () {

            const destination = this.getAttribute('destination');
            SidebarHighlight(destination);
            LoadPage(destination);
            
        });
    });
});

document.addEventListener('AuthConfirmed', function() {
    const pathArray = window.location.pathname.split('/');
    const PathOnload = pathArray[2] ? pathArray[2].toLowerCase() : "";

    if (PathOnload in router) {
        LoadPage(PathOnload);
    } else { 
        LoadPage("404");
     }
    
});


async function LoadPage(page) {

    const query = window.location.search;

    if (CurrentPage === 'none') {

        if (FunctionExists(router[page].function)) {

            window.showLoading(new Promise(r => setTimeout(r, 1500)));
            window[router[page].function](query);
            SidebarHighlight(page);
            CurrentPage = page;

        } else {
            console.error("[Router] No Function for " + page + " was found")
        }



    } else {

        if (FunctionExists(router[page].switch)) {

            const response = await window[router[page].function](query);

            if (FunctionExists(router[page].function)) {

                window.showLoading(new Promise(r => setTimeout(r, 1500)));
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



function showLoading(promise) {
    navigation.addEventListener('navigate', evt => {
       evt.intercept({
         scroll: 'manual',
         handler: () => promise,
       });
    }, { once: true });
    return navigation.navigate(location.href).finished;
   }
   
   window.showLoading = showLoading;
  