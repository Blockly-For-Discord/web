import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('embed_thumbnail', {
  "message0": "Set thumbnail to %1",
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
  "tooltip": "Set the thumbnail",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:embed_thumbnail'] = function(block, generator) {
  var value_url = generator.valueToCode(block, 'url', b4d.javascriptGenerator.ORDER_ATOMIC);
  return `.setThumbnail(${value_url})\n`;
};