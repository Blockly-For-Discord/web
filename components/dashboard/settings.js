

export function SettingsInit (query) {

    const settings = {
        "general": `<div></div>`,
        "appearance": `<div></div>`,
    }


    window.showLoading(new Promise(r => setTimeout(r, 1500)));
    console.log("Settings Page Loaded");
    history.pushState({}, "", "/dashboard/settings");
    document.title = "B4D - Settings";

    injectHTML();
    const sidebar = document.getElementById("settings-sidebar");

    settings.forEach(element => {
         console.log(element);
    });


}

export async function SettingsSwitch () {

    console.log("Settings Page Switch Requested");
    const response = `{"response":"success"}`;
    return response;
}





function injectHTML() {
    
    
    const inject = `
    <div class="settings-container">
        <div class="settings-sidebar">
            <div class="settings-title">Settings</div>
            <div class="setting-items" id="setting-items">
                <div class="setting-item">General</div>
                <div class="setting-item">Appearance</div>
                <div class="setting-item">Other</div>
            </div>
        </div>
    </div>
    `
    const container = document.getElementById("content");
    container.innerHTML = "";
    container.innerHTML = inject;

    
}
