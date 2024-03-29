

export function ProjectsInit (query) {

    const page = `
    <div class="project-container">
        <div class="project-top">
            <div class="project-header">
                <div class="project-title"></div>
                <div class="project-desc"></div>
            </div>
            <div class="project-searchbar">
                <div class="project-search"></div>
                <div class="project-filter"></div>
            </div>
        </div>
        <div class="project-list"></div>
    </div>
    `;
    
    GlobalSetPage(page);
    document.title = "B4D - My Projects";
}

export async function ProjectsSwitch () {

    console.log("My Projects Page Switch Requested");
    const response = `{"response":"success"}`;
    return response;
}