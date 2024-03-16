

export function ProjectsInit (query) {

    window.showLoading(new Promise(r => setTimeout(r, 1500)));
    console.log("My Projects Page Loaded");
    const container = document.getElementById("content");
    container.innerHTML = "My Projects Site should load here";

    document.title = "B4D - My Projects";
}

export async function ProjectsSwitch () {

    console.log("My Projects Page Switch Requested");
    const response = `{"response":"success"}`;
    return response;
}