
/*

This file is being maintaned by Blockly For Discord. Do NOT Modify in the browser unless you know what you are doing!

*/

let ui = {};

ui.clear = function (id) {
    document.getElementById(id).innerHTML = '';
}

ui.hide = function (id) {
    document.getElementById(id).style.display = 'none';
}

ui.show = function (id) {
    document.getElementById(id).style.display = 'block';
}