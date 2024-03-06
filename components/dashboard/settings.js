

export function SettingsInit (query) {
    console.log("Settings Page Loaded");
    const container = document.getElementById("content");
    container.innerHTML = "Settings Site should load here";
    history.pushState({}, "", "/dashboard/settings");
    document.title = "B4D - Settings";
}

export async function SettingsSwitch () {

    console.log("Settings Page Switch Requested");
    const response = `{"response":"success"}`;
    return response;
}