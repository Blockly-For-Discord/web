
/*

This file is being maintaned by Blockly For Discord. Do NOT Modify in the browser unless you know what you are doing!

*/

document.addEventListener('DOMContentLoaded', function () {

    const callback = window.location.search;
  
    if (callback !== '') {
      var searchParams = new URLSearchParams(callback);
      var codeValue = searchParams.get('code');
  
      fetch("https://api.blockly-for-discord.xyz/client/auth", {
          method: "GET",
          credentials: 'include',
          headers: {
              "type": "code_grant",
              "code_grant": codeValue,
              "redirect_uri": `${window.location.protocol}//${window.location.hostname}/callback`,
              "cookie_host": window.location.hostname
          }
      })
      .then(response => {
          if (!response.ok) {
              window.location.href = window.location.hostname + "?error=Something went wrong";
          }
          return response.json();
      })
      .then(data => {
        if (data.client) {
          if (data.client === "httpTokenCallback") {
            if (!Cookies.get('access_token') && !Cookies.get('refresh_token')) {
              Cookies.set('access_token', data.access_token, { expires: 7 , secure: true });
              Cookies.set('refresh_token', data.refresh_token, { expires: 7 , secure: true });
            }
            window.location.href = "https://" + window.location.hostname + "/dashboard/";
          } else {
            window.location.href = "https://" + window.location.hostname + "?error=" 
          + ErrorHandler(data.client);
          }
        } else {
          window.location.href = "https://" + window.location.hostname + "?error=An unknown error occurred. Try again in a few minutes";
        }
          
      })
      .catch(error => {  
          console.error('Error during fetch:', error);
          window.location.href = "https://" + window.location.hostname + "?error=" + ErrorHandler(data.client);
      });
      
    } else {
      window.location.href = "https://" + window.location.hostname 
    }
    
  });
  
  function ErrorHandler (error) {
    switch (error) {
      case 'httpNoGrantCode':
        return "httpNoGrantCode";
  
      case 'httpInvalidAuthType':
        return "httpInvalidAuthType";
        
      case 'httpNoAuthType':
        return "httpNoAuthType";
        
      case 'httpDiscordInvalidCodeGrant':
        return "httpDiscordInvalidCodeGrant"
        
        case 'httpDiscordError':
          return "httpDiscordError"
        
        case 'httpServerError':
          return "httpServerError"
        
      default:
          return "Unknown Error"
  
       
    }
  }