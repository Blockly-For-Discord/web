

export function SettingsInit (query) {

    window.showLoading(new Promise(r => setTimeout(r, 1500)));
    console.log("Settings Page Loaded");
    const container = document.getElementById("content");
    container.innerHTML = "";
    history.pushState({}, "", "/dashboard/settings");
    document.title = "B4D - Settings";

    const box = document.createElement("div");
    container.appendChild(box);
    box.classList.add("settings-container");

    // create sidebar
    const sidebar = document.createElement("div");
    sidebar.classList.add("settings-sidebar");

    // create main box
    const main = document.createElement("div");
    main.classList.add("settings-box");

    // append as children

    box.appendChild(sidebar);
    box.appendChild(main);

    const title = document.createElement("div");
    title.innerHTML = "Settings";
    title.classList.add("settings-title");
    sidebar.appendChild(title);
}

export async function SettingsSwitch () {

    console.log("Settings Page Switch Requested");
    const response = `{"response":"success"}`;
    return response;
}