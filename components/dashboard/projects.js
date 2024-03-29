

export function ProjectsInit (query) {

    const page = `

    <div class="project-container">
    <div class="project-top">
        <div class="project-header">
            <div class="project-title">My Projects</div>
            <div class="project-desc">All the projects you make will appear here...</div>
        </div>
        <div>
        <div class="project-searchbar">
            <div class="search-container"><input type="text" class="search-input input-binder" placeholder="Search something here..."><div class="search-input-icon"><svg width="15" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07631 21L9.19521 13.8757C9.741 14.2791 10.3728 14.6002 11.0907 14.839C11.8086 15.0778 12.5807 15.1972 13.4071 15.1972C15.5224 15.1972 17.3168 14.46 18.7901 12.9856C20.2634 11.5113 21 9.7156 21 7.59863C21 5.48165 20.2634 3.68597 18.7901 2.21158C17.3168 0.737193 15.5224 0 13.4071 0C11.2917 0 9.49733 0.737193 8.02404 2.21158C6.55076 3.68597 5.81411 5.48165 5.81411 7.59863C5.81411 8.43605 5.93343 9.20874 6.17207 9.9167C6.41068 10.6246 6.73153 11.2465 7.13461 11.7821L0 18.9378L2.07631 21ZM13.4071 12.2468C12.1107 12.2468 11.0125 11.7964 10.1125 10.8957C9.21238 9.99493 8.76234 8.89592 8.76234 7.59863C8.76234 6.30134 9.21238 5.20231 10.1125 4.30156C11.0125 3.40081 12.1107 2.95043 13.4071 2.95043C14.7034 2.95043 15.8016 3.40081 16.7017 4.30156C17.6017 5.20231 18.0518 6.30134 18.0518 7.59863C18.0518 8.89592 17.6017 9.99494 16.7017 10.8957C15.8016 11.7965 14.7034 12.2468 13.4071 12.2468Z" fill="#707070"/>
                </svg>
                    </div>
                </div>
            </div>
            <div class="project-filter"></div>
            </div>
        </div>
        <div class="project-list" id="prokect-list">
            <div class="project-item">
                <div class="project-card"></div>
                <div class="project-card-info">
                    <div class="project-card-info-title">My project</div>
                    <div class="project-card-info-desc">DiscordJS - 923 Blocks - 2 Extensions</div>
                </div>
            </div>
        </div>
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