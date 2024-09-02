import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('embed_description', {
  "message0": "Set description to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.embed,
  "tooltip": "Set the description",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:embed_description'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  return `.setDescription(${value_text})\n`;
};
