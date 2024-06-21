import branch from "/branch.json" with { type: "json" };


let b4d = {
  version: function() {
      console.log(branch.version + " / Google's Blockly" + b4d.Blockly.VERSION);
  }
};