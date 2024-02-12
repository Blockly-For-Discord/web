document.addEventListener('DOMContentLoaded', function () {
    
    const callback = window.location.search;

    
    if(!callback === undefined) {

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

            } else {

                window.location.href = "https://blockly-for-discord.xyz?error=request_denied"

            }
        })
        .catch(error => {
            window.location.href = "https://blockly-for-discord.xyz?error=" + data.response
        })
            
        
        

        window.location.href = "https://blockly-for-discord.xyz/dashboard/";
    } else {
        window.location.href = "https://blockly-for-discord.xyz/";
    }
});
