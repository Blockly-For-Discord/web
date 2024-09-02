import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('embed_image', {
  "message0": "Set image to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "url",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.embed,
  "tooltip": "Set the image",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:embed_image'] = function(block, generator) {
  var value_url = generator.valueToCode(block, 'url', b4d.javascriptGenerator.ORDER_ATOMIC);
  return `.setImage(${value_url})\n`;
};