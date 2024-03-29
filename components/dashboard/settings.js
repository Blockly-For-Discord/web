const settings = {
    "general": `<div></div>`,
    "appearance": `<div></div>`,
    "other": `div`,
}


export function SettingsInit (query) {



    console.log("Settings Page Loaded");
    history.pushState({}, "", "/dashboard/settings");
    document.title = "B4D - Settings";

    const page = `
    <div class="settings-container">
        <div class="settings-sidebar">
            <div class="settings-title">Settings</div>
            <div class="setting-items" id="setting-items">
                <div class="setting-item" id="general">General</div>
                <div class="setting-item" id="appearance">Appearance</div>
                <div class="setting-item" id="other">Other</div>
            </div>
        </div>
    </div>
    `;
    
    GlobalSetPage(page);

    // for loop
    const sidebar = document.getElementById("settings-sidebar");

    for (var key in settings) {

        console.log(key, settings[key]);

        const element = document.getElementById(key);
        
        element.addEventListener('click', function() {
            const elements = document.querySelectorAll('#setting-items *');
            elements.forEach((element) => {
                element.classList.remove('setting-item-active');
               });
            element.classList.add("setting-item-active");
               LoadSettings(key);
        });
    }
}

export async function SettingsSwitch () {

    console.log("Settings Page Switch Requested");
    const response = `{"response":"success"}`;
    return response;
}



function LoadSettings(){
    // remember to add one for /settings/whatever
    // default will load /settings/general


}