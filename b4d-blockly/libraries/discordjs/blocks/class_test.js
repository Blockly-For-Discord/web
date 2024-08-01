import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

b4d.namespaces.discordjs.createBlock('aw_block', {
  "message0": "%1 aw",
  "args0": [
    {
      "type": "input_value",
      "name": "STRING",
      "check": [ "Number", "String" ]
    }
  ],
  "output": "String",
  "colour": "#D14081",
  "tooltip": "",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:aw_block'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'STRING', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `awwwwwwwww ${value_name}`;
  return code;
};
