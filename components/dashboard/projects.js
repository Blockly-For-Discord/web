

export function ProjectsInit (query) {

    const page = `
    <div class="project-container">
        <div class="project-top">
            <div class="project-header">
                <div class="project-title">My Projects</div>
                <div class="project-desc">All the projects you make will appear here...</div>
            </div>
            <div class="project-searchbar">
                <div class="project-search"><input type="text" class="nav-search" placeholder="Search my projects..."></div>
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