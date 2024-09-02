import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('embed_author', {
  "message0": "Set author to %1 with icon %2 with url %3",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "icon",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "url",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.embed,
  "tooltip": "Set the author (icon and url are optional)",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:embed_author'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_icon = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_url = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  return `.setAuthor({ name: ${value_text}${value_icon.length<3 ? '' : ', iconURL: '+value_icon}${value_url.length<3 ? '' : ', url: '+value_url} })\n`;
};