b4d.register = function (name, data) {
    b4d.Blockly.Blocks[name] = {
      init: function() {
          this.jsonInit(data);
      }
  };
  };