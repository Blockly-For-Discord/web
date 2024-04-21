b4d.register = function(Name, Data) {
  
    b4d.Blockly.Blocks[Name] = {
      init: function() {
        this.jsonInit(Data);
      }
    }
}  