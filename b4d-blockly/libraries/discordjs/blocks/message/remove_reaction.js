import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('message_remove_reaction', {
  "message0": "Remove %1 reactions from %2",
  "args0": [
    {
      "type": "input_value",
      "name": "emoji",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "message",
      "check": "Message"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.message,
  "tooltip": "Remove a specific reaction in a message",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:message_remove_reaction'] = function(block, generator) {
  var value_emoji = generator.valueToCode(block, 'emoji', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_message = generator.valueToCode(block, 'message', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_message}.reactions.cache.get(${value_emoji}).remove();\n`;
  return code;
};
