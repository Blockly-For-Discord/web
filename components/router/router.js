/*

Made and Maintained by Blockly For Discord. Any Modification is prohibited and could lead to faulty behaviour of the site - v0.5.6

*/

export class Router {
    constructor (sidebar_top, sidebar_bottom) {
        
        this.sidebar_top = document.getElementById(sidebar_top);
        this.sidebar_bottom = document.getElementById(sidebar_bottom);
    }

    static pages = {};
    static paths = {};
    static currentPage = "none";

    register (name, path, svg, orientation, tooltip, disabled, init, change) {
        Router.pages[name] = { path, init, change, disabled};

        // places the svg as an icon based on orientation. svg_img_handler.js turns <img> into <svg>. apply any properties on the image as one would on an svg.
        const IconSvg = document.createElement('img');
        IconSvg.setAttribute('src', svg);
        IconSvg.setAttribute('id', name);

        // apply class based on if its disabled or not
        if (disabled === true) { IconSvg.setAttribute('class', 'sidebar-icon-disabled'); } else { IconSvg.setAttribute('class', 'sidebar-icon-active'); }

        // insert the img element
        if (orientation === 'top') { this.sidebar_top.appendChild(IconSvg); } else { this.sidebar_bottom.appendChild(IconSvg); }

        // click event listener
        setTimeout(() => {
            document.getElementById(name).addEventListener('click', async function (event) {
                // get the "destination" attribute
                var iconID = name;

                if (!Router.pages[iconID].disabled === true) {
                    // if not disabled run load(name) # artificially loads any page provided it exists within the json
                    
                    Router.load(iconID);
                }
            });
          }, 500);
        
    }


    static async load (name) {
        document.getElementById(name).classList.add('sidebar-icon-active');

        if (Router.currentPage === 'none') {

           // theres no current page
            const initFunc = Router.pages[name].init;

            if (typeof initFunc === 'function') {

                Router.currentPage = name;

                await initFunc();


            } else {
                console.warn("The provided initialization function for '" + name + "' is not a function");
            }

        } else {

            const changeFunc = Router.pages[Router.currentPage].change;
            const initFunc = Router.pages[name].init;

            if (typeof changeFunc === 'function' && typeof initFunc === 'function') {
                await changeFunc();
                await initFunc();
            } else {
                console.warn(`Either the change or the initialization function provided is not a function.`);
            }
        }
    }

}