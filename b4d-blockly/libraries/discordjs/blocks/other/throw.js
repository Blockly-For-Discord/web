import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('other_throw', {
  "message0": "Throw error %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.other,
  "tooltip": "Thow a error",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:other_throw'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `throw new Error(${value_text});\n`;
  return code;
};