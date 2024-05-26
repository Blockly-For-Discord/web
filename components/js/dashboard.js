
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

document.addEventListener("DOMContentLoaded", async function() {

  
  
    for (let i = 0; i < 3; i++) {
        console.log('%cWAIT!', 'color: white; font-weight: bolder; font-size 50px;')
        console.log('%cIf someone told you to PASTE something here, do NOT do it. Theres a 101% Chance they are trying to hack your account.', 'color: red; font-size: 16px;');
      }
      


      if (Cookies.get('access_token')) {
        // if user has token. type: access_token
        
        
      } else if (Cookies.get('refresh_token')) {
        // if user has refresh_token but no token. type: refresh_token
        
      } else {
        // if user has no token or refresh token. type: code_grant
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
      }
    

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

function DeployWindow(options) {

  const {
    title = "Default Title",
    content = `<p>Default content</p>`,
    closable = false,
    width,
    height,
    showInfoIcon = false,
    info = "",
    showIcon = false,
    icon = "",
    buttons = '',
    callback = null,
    animationOnAppear = "",
    animationOnDissapear = "",
    animationDuration = 0,
    duration = 0,
    id,
  } = options;

  const preset = `
  <div id="WindowContainer">
  <div id="WindowTop">
      <div id="WindowTitleBar">
          <div id="WindowTitle"></div>
          <div id="CloseButton"></div>
      </div>
      <div id="WindowContent"></div>
  </div>
  <div id="WindowBottom">
      <div id="info-section">
          <div id="info-icon"></div>
          <div id="info-text"></div>
      </div>
      <div id="button-section"></div>
  </div>
</div>
  `;

  const PContainer = document.createElement('div');
  PContainer.classList.add("ParentContainerCover");
  PContainer.innerHTML = preset;
  PContainer.getElementById("WindowTitle").innerHTML = title;
  PContainer.getElementById("WindowContent").innerHTML = content;
  //closable
  if (!closable) {
    PContainer.getElementById("CloseButton").style.display = "none";
  } else {
    PContainer.getElementById("CloseButton").addEventListener('click', function() {
      // CloseWindow method goes here
    });
  }

  // width, height
  PContainer.getElementById("WindowContainer").style.width = width;
  PContainer.getElementById("WindowContainer").style.height = height;

  // Show Info icon
  if (!showInfoIcon) {
    PContainer.getElementById("info-icon").style.display = "none";
  }
};

function DeployWindowExists () {

}