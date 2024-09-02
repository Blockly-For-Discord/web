import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('embed_title', {
  "message0": "Set title to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "title",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.embed,
  "tooltip": "Set the title",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:embed_title'] = function(block, generator) {
  var value_title = generator.valueToCode(block, 'title', b4d.javascriptGenerator.ORDER_ATOMIC);
  return `.setTitle(${value_title})\n`;
};
