/*

Made and Maintained by Blockly For Discord. Any Modification is prohibited and could lead to faulty behaviour of the site - v0.0.0 

*/

const router = {
    "home" : {
        "dest" : "https://",
        "function" : "InitHome",
        "switch" : "EndHome",
    },
    // 404 - routes when no other match is found
    "404" : {
        "dest" : "https://",
        "function" : "Init404",
        "switch" : "End404",
    }
}

// Router on first Page Load
document.addEventListener('DOMContentLoaded', function() {
    InitLoadScreen();
    const PathOnload = window.location.pathname.split('/')[1].toLowerCase();

    const query = window.location.search;

    if (PathOnload in router) {

        const FunctionToRun = router[PathOnload].function;

        if (typeof window[FunctionToRun] === "function") {


            // Set loading screen
            window[FunctionToRun](query);

        } else { console.error("[Router] Couldn't find Initiator for " + PathOnload) };

    } else {

        const FunctionToRun = router["404"].function;

        if (typeof window[FunctionToRun] === "function") {

            window[FunctionToRun]();
        } else { console.error("[Router] Couldn't find Initiator for 404") };
    };
    

  });
  

// Router on page switch

async function SwitchPage (from, to) {
    
    if (router[from]) {

        const switchFunction = router[from].switch;

        if (typeof window[switchFunction]  === 'function') {

            window[switchFunction]();

            const response = await window[switchFunction]();

        } else {

            console.error("[Router] Couldn't find function " + switchFunction + "();");

        }

    }
}

function InitLoadScreen () {

}


function InitLoadBar () {

}

