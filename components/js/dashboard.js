
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


document.addEventListener("DOMContentLoaded", function() {

  
  // Console warning
  for (let i = 0; i < 3; i++) {
    console.log('%cWAIT!', 'color: white; font-weight: bolder; font-size 50px;')
    console.log('%cIf someone told you to PASTE something here, do NOT do it. Theres a 101% Chance they are trying to hack your account.', 'color: red; font-size: 16px;');
  }
  
  
  const authSessionEvent = new CustomEvent('AuthSession', {
    detail: {
      type: 'success',
      params: {},
      event: {}
    },
    bubbles: true,
    cancelable: true
  });

  window.dispatchEvent(authSessionEvent);

});


window.addEventListener('AuthSession', async function() {

  // set descpription for user to see
  preloader.setTextDetail("Connecting to Server...");

  // check if server is available
  const server_available = await srv.isAvailable();

  if (server_available === 1) {

    preloader.setProgress(0.1);

    setTimeout(() => {
    
    // update status
    preloader.setTextDetail("Checking Cookies...");
  }, 500);

    // check if both access_token and refresh_token are present
    if (Cookies.get('access_token') && Cookies.get('refresh_token')) {
   
      
      // update status
      setTimeout(() => {
        preloader.setProgress(0.3);
        preloader.setTextDetail("Authenticating...");
      }, 1000);
  
      // get user profile picture, 
      const response = srv.getBasicUserData();
      
  

    } else if (Cookies.get('refresh_token')) {
  
      preloader.setProgress(0.3);
  
      setTimeout(() => {
          preloader.setTextDetail("Fetching neccesary data...");
      }, 1000);

      // Get the new access token
    } else {
  
      setTimeout(() => {
        preloader.setTextDetail("Redirecting");
    }, 1000);
  
    }

  } else if (server_available === 2) {

    preloader.setProgress(0);
    setTimeout(() => {
      preloader.setTextDetail("Server is under maintenance...");
  }, 1000);

  } else {

    setTimeout(() => {
      preloader.setTextDetail("Server is unavailable...");
  }, 1000);

  }
 

});