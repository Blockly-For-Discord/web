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
let items = ["s-home", "s-projects", "s-explore", "s-users", "s-extensions", "s-updates", "s-developer", "s-settings"];
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
<div class="nav-items">
</div>`;
    SetNavbar(navbar);

    items.forEach(item => {
      let element = document.getElementById(item);
      
      element.addEventListener("click", function() {
          items.forEach(otherItem => {
            window.IconPageLoader(item);
              console.log("the oter thing" + otherItem);
              
              let otherElement = document.getElementById(otherItem);
              if (otherElement !== element) {
                  if (otherItem === "s-settings") {
                      otherElement.classList.remove("action-item-settings");
                  } else {
                      otherElement.classList.remove("action-item-active");
                  }
              }
          });
          if (item === "s-settings") {
              element.classList.add("action-item-settings");
          } else {
              element.classList.add("action-item-active");
          }
      });
  });

});


let AuthEventHasRun = false;

function AuthEvent() {
  if (!AuthEventHasRun) {
    hasRun = AuthEventHasRun;
    const authEvent = new CustomEvent("AuthConfirmed");
    document.dispatchEvent(authEvent);
    
  }
}

function ProgressChange(value) {
  const LoadingBar = document.getElementById('loadbar');
  const Progress = document.getElementById('progress');
  const widthPercentage = LoadingBar.offsetWidth / 100;
  Progress.style.width = widthPercentage * value + 'px';

    
}