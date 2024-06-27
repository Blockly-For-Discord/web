


  export default class Router {
    constructor(trigger_container) {

        this.trig_cont = trigger_container;
    }
    
    static pages = {};
    static paths = {};
    static loaded = false;
    static currentPage = "none";


    // DONE

    add(name, path, trigger, tooltip, init, change) {
        if (!Router.pages[name]) {
            Router.pages[name] = { path, trigger, tooltip, init, change };
        } else {
            console.warn(`A page with the name "${name}" already exists.`);
        }


        if (!Router.paths[path]) {
            Router.paths[path] = name;
        } else {
            console.warn(`The path "${path}" has already been assigned.`);
        }

        // we add a click event for the icon
        
        document.getElementById(trigger).addEventListener('click', function() {
            Router.call(name);

            const children = document.getElementById(trigger).childNodes;
            for (var i = 0; i < children.length; i++) {
                if (children[i] === document.getElementById(trigger)) {
                    document.getElementById(trigger).classList.add('action-item-active');
                } else {
                    children[i].classList.remove('action-item-active');
                }
            }
        });

        tippy('#' + trigger, {
            content: tooltip,
            placement: 'right'
          });
        
    }

    static LoadCurrent() {

        if (!Router.loaded) {
            Router.loaded = true;
            const currentPath = window.location.pathname.replace('/dashboard','');
            if (currentPath.startsWith('/')) {
                currentPath = currentPath.slice(1, currentPath.length)
            }
            if (currentPath.endsWith('/')) {
                currentPath = currentPath.slice(0, currentPath.length-1)
            }

            // searches through the list of registered pages to see if the path matches
            Object.keys(Router.paths).forEach((pathKey) => {
                const pageName = Router.paths[pathKey];
                if (currentPath === pathKey) {
                    Router.call(pageName); 
                }
            });
        }
    
    }

    static async call(name) {

    /*
        Function to artificially load a page
    */
        
        if (Router.currentPage === "none") {

            // If the website loads for the first time, run the start function from 'name'

            Router.currentPage = name;

            const InitFunction = Router.pages[name];
            if (typeof InitFunction.init === 'function') {
                InitFunction.init();
                
            } else {
                console.warn(`The init function for page "${name}" is not a function.`);
            }
        } else {

             // If the website does NOT load for the first time, run the switch function from the previous page, and then the new function
             Router.currentPage = name;

            const SwitchFunction = Router.pages[Router.currentPage];
            const InitFunction = Router.pages[name];

            if (typeof SwitchFunction.change === 'function' && typeof InitFunction.init === 'function') {
                await SwitchFunction.change();
                InitFunction.init();
                
            } else {
                console.warn(`Either the switch or the init function provided is not a function.`);
            }
        }
    }
}
