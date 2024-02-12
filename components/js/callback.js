document.addEventListener('DOMContentLoaded', function () {
    
    const callback = window.location.search;

    
    if(callback !== '') {

        var searchParams = new URLSearchParams(callback);
        var codeValue = searchParams.get('code');

        fetch("https://api.blockly-for-discord.xyz/token", {
            method: "GET",
            headers: {
            "code": codeValue
            }
        })
        .then(data => {
            if (data.response === "ok") {
                const tokenHeaderValue = response.headers.get('token');
                Cookies.set('token', tokenHeaderValue, { expires: 7 });
                window.location.href = "https://blockly-for-discord.xyz/dashboard/";

            } else {

                window.location.href = "https://blockly-for-discord.xyz?error=request_denied"

            }
        })
        .catch(error => {
            window.location.href = "https://blockly-for-discord.xyz?error=" + data.response
        })
            
        
        

        
    } else {
        window.location.href = "https://blockly-for-discord.xyz/";
    }
});
