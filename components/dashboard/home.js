

export function HomeInit (query) {

    history.pushState({}, "", "/dashboard");
    document.title = "B4D - Home";

    const page = `
    <div class="box-container" id="box-container">
        <h1 class=\"home-header\">What will you be making today?</h1>
        <div class=\"button-row\">
            <button class=\"home-button\">New Blank Project</button>
            <button class=\"home-button\">Start with a template</button>
            <button class=\"home-button\">Explore for now</button>
        </div>
        <p class=\"info-tour\">Don't know what to do? <span class=\"tour\">Start the tour<span></p>
    </div>
    `;
    GlobalSetPage(page);
}



export async function HomeSwitch () {

    const response = `{"response":"success"}`;
    return response;
    
}
