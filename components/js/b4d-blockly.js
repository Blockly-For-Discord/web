
/*

This file is being maintaned by Blockly For Discord. Do NOT Modify in the browser unless you know what you are doing!

*/

b4d.register = function (name, data) {
    b4d.Blockly.Blocks[name] = {
      init: function() {
          this.jsonInit(data);
      }
  };
  };