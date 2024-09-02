import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('embed_url', {
  "message0": "Set url to %1",
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
  "tooltip": "Set the url",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:embed_url'] = function(block, generator) {
  var value_url = generator.valueToCode(block, 'url', b4d.javascriptGenerator.ORDER_ATOMIC);
  return `.setURL(${value_url})\n`;
};