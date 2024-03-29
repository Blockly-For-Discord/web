
/*

This file is being maintaned by Blockly For Discord. Do NOT Modify in the browser unless you know what you are doing!

*/

let b4d = {
  version: function() {
      console.log("B4D - " + "v0.0.0/production");
      console.log("Blockly - " + b4d.Blockly.VERSION);
      console.log("CSS - " + "v0.0.0");
      console.log("JS - " + "v0.0.0");
  }
};

document.addEventListener("DOMContentLoaded", function() {

  
  /*
    for (let i = 0; i < 3; i++) {
        console.log('%cWAIT!', 'color: white; font-weight: bolder; font-size 50px;')
        console.log('%cIf someone told you to PASTE something here, do NOT do it. Theres a 101% Chance they are trying to hack your account.', 'color: red; font-size: 16px;');
      }
      

      if (!Cookies.get('token')) {

        ProgressChange(20);
        const ProgressText = document.getElementById('LoadScreenText');
        setTimeout(function() {
          const link = document.createElement('a');
          link.href = 'https://discord.com/api/oauth2/authorize?client_id=1163198844599808254&response_type=code&redirect_uri=https%3A%2F%2Fblockly-for-discord.xyz%2Fcallback&scope=identify+email';
          link.rel = 'noopener noreferrer';
          document.body.appendChild(link);
          ProgressText.textContent = 'Redirecting...';
          link.click();
        }, 1400);

      } else {
        


      }
      
    */

    // UI TESTS AND CO, GOES AFTER CHECK PREFERRABLY NEW FUNCTION OR EVENT
    const navbar = ` <div class="nav-logo">
    <svg class="logo" width="944" height="804" viewBox="0 0 944 804" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M561.878 89.3585C493.097 -29.7862 321.138 -29.7862 252.356 89.3585L24.398 484.226C-44.3843 603.373 41.5938 752.302 179.159 752.302H407.011C357.571 697.914 342.251 614.313 384.29 541.855L496.453 348.529C532.648 286.142 597.169 256.545 660.236 259.737L561.878 89.3585Z" fill="#308FE7"/>
        <path d="M535.111 406.33C603.984 287.672 775.335 287.672 844.208 406.33L918.65 534.576C987.807 653.723 901.856 803.019 764.101 803.019H615.218C477.464 803.019 391.51 653.723 460.668 534.576L535.111 406.33Z" fill="#D9D9D9"/>
        </svg>
    <span class="logo-text">B4D</span>
</div>
<div class="nav-right">
  <div class="nav-items">
      <div class="nav-item">a</div>
  </div>
  <div class="search-container">
  <input type="text" class="nav-search" placeholder="This is a placeholder"><div class="nav-searchw"><svg width="15" height="15" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.07631 21L9.19521 13.8757C9.741 14.2791 10.3728 14.6002 11.0907 14.839C11.8086 15.0778 12.5807 15.1972 13.4071 15.1972C15.5224 15.1972 17.3168 14.46 18.7901 12.9856C20.2634 11.5113 21 9.7156 21 7.59863C21 5.48165 20.2634 3.68597 18.7901 2.21158C17.3168 0.737193 15.5224 0 13.4071 0C11.2917 0 9.49733 0.737193 8.02404 2.21158C6.55076 3.68597 5.81411 5.48165 5.81411 7.59863C5.81411 8.43605 5.93343 9.20874 6.17207 9.9167C6.41068 10.6246 6.73153 11.2465 7.13461 11.7821L0 18.9378L2.07631 21ZM13.4071 12.2468C12.1107 12.2468 11.0125 11.7964 10.1125 10.8957C9.21238 9.99493 8.76234 8.89592 8.76234 7.59863C8.76234 6.30134 9.21238 5.20231 10.1125 4.30156C11.0125 3.40081 12.1107 2.95043 13.4071 2.95043C14.7034 2.95043 15.8016 3.40081 16.7017 4.30156C17.6017 5.20231 18.0518 6.30134 18.0518 7.59863C18.0518 8.89592 17.6017 9.99494 16.7017 10.8957C15.8016 11.7965 14.7034 12.2468 13.4071 12.2468Z" fill="#707070"/>
  </svg>
  </div></div>
  </div>`;
    SetNavbar(navbar);


});




let AuthEventHasRun = false;

function AuthEvent() {
  if (!AuthEventHasRun) {
    hasRun = AuthEventHasRun;
    const authEvent = new CustomEvent("AuthConfirmed");
    document.dispatchEvent(authEvent);
    
  }
}

function ProgressChange (value) {
  const LoadingBar = document.getElementById('loadbar');
  const Progress = document.getElementById('progress');
  const widthPercentage = LoadingBar.offsetWidth / 100;
  Progress.style.width = widthPercentage * value + 'px';

    
}


function TippyJS (router) {
  b4d.tippy('#avatar-container', {

    content: "I'm a Tippy tooltip!",
    placement: 'right',
    animation:'perspective',
    allowHTML: true,
    interactive: true,
    theme: 'b4ddark',
    arrow: false,
  });
  // sidebar tooltips
  for (let key in router) {
    if (router.hasOwnProperty(key)) {
        const entry = router[key];
        if (entry.tooltip) {
            const icon = entry.icon;
            const tooltip = entry.tooltip;

            console.log("Icon:", icon, "Tooltip:", tooltip);
            b4d.tippy('#' + icon, {

              content: tooltip,
              placement: 'right',
              animation:'perspective',
              theme: 'b4ddark',
              arrow: false,
            });
        }
    }
}
}

window.TippyJS = TippyJS;
