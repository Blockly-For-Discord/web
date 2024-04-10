document.addEventListener('DOMContentLoaded', function () {
    const callback = window.location.search;

    if (callback !== '') {
        var searchParams = new URLSearchParams(callback);
        var codeValue = searchParams.get('code');

        fetch("https://api.blockly-for-discord.xyz/token", {
            method: "GET",
            headers: {
                "type": "code_grant",
                "code_grant": codeValue
            }
        })
        .then(response => {
            if (!response.ok) {
                window.location.href = "https://blockly-for-discord.xyz?error=bad_response";
            }
            return response.json();
        })
        .then(data => {
            if (data.client === "httpTokenCallback") {
                Cookies.set('token', data.access_token, { expires: 7 });
                Cookies.set('refresh', data.refresh_token, { expires: 7 });
                window.location.href = "https://blockly-for-discord.xyz/dashboard/";
            } else {
                window.location.href = "https://blockly-for-discord.xyz?error=request_denied";
            }
        })
        .catch(error => {
            console.error('Error during fetch:', error);
            window.location.href = "https://blockly-for-discord.xyz?error=Couldn't access sever. Is it down?";
        });
    } else {
        window.location.href = "https://blockly-for-discord.xyz/";
    }
});
