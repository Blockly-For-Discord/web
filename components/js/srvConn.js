
/*

This file is being maintaned by Blockly For Discord. Do NOT Modify in the browser unless you know what you are doing!

*/

let srv = {};

    // 0 -> cant access server
    // 1 -> server data successfully returned
    // 2 -> server maintenance
    // 3 -> server error

// checks if server is there
srv.isAvailable = async function () {


    try {
        const response = await fetch('https://api.blockly-for-discord.xyz/ping');
        const data = await response.json();

        console.log(data);
        if (data.client === 'httpPingServer') {
            console.log("success");
            return 1;

        } else if (data.client === 'maintenance') {

             return 2;
        }
    } catch (error) {
        console.error('[Error] Error ocurred contacting Server:', error);

        return 0;
    }
    
};

// gets basic user data
srv.getBasicUserData = function (access_token) {

    

};