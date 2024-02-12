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
      

      if (!Cookies.get('token')) {

        ProgressChange(20);
        const link = document.createElement('a');
        link.href = 'https://discord.com/api/oauth2/authorize?client_id=1163198844599808254&response_type=code&redirect_uri=https%3A%2F%2Fblockly-for-discord.xyz%2Fcallback&scope=identify+email';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        await new Promise(resolve => setTimeout(resolve, 0));
        link.click();

      } else {



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

function ProgressChange(value) {
  const LoadingBar = document.getElementById('loadbar');
  const Progress = document.getElementById('progress');
  const widthPercentage = LoadingBar.offsetWidth / 100;
    Progress.style.width = widthPercentage * value + 'px';
}