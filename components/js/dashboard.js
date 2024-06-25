
/*

This file is being maintaned by Blockly For Discord. Do NOT Modify in the browser unless you know what you are doing!

*/

let b4d = {
  version: function(){return ''},
  live: function(){return ''},
  dev: function(){return ''},
  branch: function(){return ''}
};

fetch('/branch.json')
 .then(async response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let branch = await response.json();
    b4d.version = function() {
      console.log("B4D: " + branch.version + "\nBlockly: " + b4d.Blockly.VERSION);
    }
    b4d.live = function() {
      window.location.href = branch.live + window.location.pathname + window.location.search
    }
    b4d.dev = function() {
      window.location.href = branch.dev + window.location.pathname + window.location.search
    }
    b4d.branch = function(selector) {
      
        let result = branch;
        const keys = selector.split('.');
        for (let key of keys) {
            if (result.hasOwnProperty(key)) {
                result = result[key];
            } else {
                throw new Error(`Property ${key} not found`);
            }
        }
        return result;
    
    }
  })
 .catch(error => {
    console.error('[Error] An error ocurred fetching branch information. Error: ' + error);
  });


document.addEventListener("DOMContentLoaded", async function() {

  
  
    for (let i = 0; i < 3; i++) {
        console.log('%cWAIT!', 'color: white; font-weight: bolder; font-size 50px;')
        console.log('%cIf someone told you to PASTE something here, do NOT do it. Theres a 101% Chance they are trying to hack your account.', 'color: red; font-size: 16px;');
      }
      


      if (Cookies.get('access_token') && Cookies.get('refresh_token')) {
        // if user has token. type: access_token
        const pt = document.getElementById('LoadScreenText');
        ProgressChange(20);
        // verified that server is online
        pt.textContent = 'Fetching user data...';
        // get user data (profile, username)
        setTimeout(function() {
          ProgressChange(100);
          AuthEvent();
        }, 3000);

        const ls = this.getElementById('loadscreen');
        ls.style.display = 'none';

      } else if (Cookies.get('refresh_token')) {
        // if user has refresh_token but no token. type: refresh_token
        
      } else {
        // if user has no token or refresh token. type: code_grant
        ProgressChange(20);
        const pt = document.getElementById('LoadScreenText');
        setTimeout(function() {
          const link = document.createElement('a');
          link.href = b4d.branch("oauth.redirect_uri");
          link.rel = 'noopener noreferrer';
          document.body.appendChild(link);
          pt.textContent = 'Redirecting...';
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
