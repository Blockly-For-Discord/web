document.addEventListener('DOMContentLoaded', function () {

    const callback = window.location.search;
  
    if (callback !== '') {
      var searchParams = new URLSearchParams(callback);
      var codeValue = searchParams.get('code');
  
      fetch("https://api.blockly-for-discord.xyz/client/auth", {
          method: "GET",
          headers: {
              "type": "code_grant",
              "code_grant": codeValue
          }
      })
      .then(response => {
          if (!response.ok) {
              window.location.href = "https://blockly-for-discord.xyz?error=Something went wrong";
          }
          return response.json();
      })
      .then(data => {
        if (data.client) {
          if (data.client === "httpTokenCallback") {
            Cookies.set('token', data.access_token, { expires: 7 });
            Cookies.set('refresh_token', data.refresh_token, { expires: 7 });
            window.location.href = "https://blockly-for-discord.xyz/dashboard/";
          } else {
            window.location.href = "https://blockly-for-discord.xyz?error=" 
          + ErrorHandler(data.client);
          }
        } else {
          window.location.href = "https://blockly-for-discord.xyz?error=An unknown error occurred. Try again in a few minutes";
        }
          
      })
      .catch(error => {  
          console.error('Error during fetch:', error);
          window.location.href = "https://blockly-for-discord.xyz?error=" + ErrorHandler(data.client);
      });
      
    };
    
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