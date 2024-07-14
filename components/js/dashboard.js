
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
      

    // IMPORTANT: ENTRY POINT
      if (Cookies.get('access_token') && Cookies.get('refresh_token')) {
 
      } else if (Cookies.get('refresh_token')) {
        // if user has refresh_token but no token. type: refresh_token
        
      } else {
        // if user has no token or refresh token. type: code_grant
 
      }
    

});


