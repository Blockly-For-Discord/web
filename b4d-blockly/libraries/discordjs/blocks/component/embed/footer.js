import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('embed_footer', {
  "message0": "Set footer text to %1 with icon %2",
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
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.embed,
  "tooltip": "Set the footer (icon is optional)",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:embed_footer'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_icon = generator.valueToCode(block, 'icon', b4d.javascriptGenerator.ORDER_ATOMIC);
  return `.setFooter({ text: ${value_text}${value_icon.length<3 ? '' : ', iconURL: '+value_icon} })\n`;
};