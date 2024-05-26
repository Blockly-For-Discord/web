


  class Router {
    constructor(base_url) {
        this.base_url = base_url;
    }

    static pages = {};
    static paths = {};
    static loaded = false;
    static currentPage = "none";

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

        document.getElementById(trigger).addEventListener('click', function() {
            Router.call(name);
        });
        
    }

    static LoadCurrent() {

        if (!Router.loaded) {
            Router.loaded = true;
            const currentPath = window.location.pathname;

            Object.keys(Router.paths).forEach((pathKey) => {
                const pageName = Router.paths[pathKey];
                if (currentPath === pathKey) {
                    Router.call(pageName); 
                }
            });
        }
    
    }

    static async call(name) {

        currentPage = name;
        
        if (Router.currentPage === "none") {

            const InitFunction = Router.pages[name];
            if (typeof InitFunction.init === 'function') {
                InitFunction.init();
                
            } else {
                console.warn(`The init function for page "${name}" is not a function.`);
            }
        } else {
            const SwitchFunction = Router.pages[Router.currentPage];
            const InitFunction = Router.pages[name];

            if (typeof SwitchFunction.switch === 'function' || typeof InitFunction.switch === 'function') {
                await SwitchFunction.switch();
                InitFunction.init();
                
            } else {
                console.warn(`The switch function for page "${name}" is not a function.`);
            }
        }
    }
}