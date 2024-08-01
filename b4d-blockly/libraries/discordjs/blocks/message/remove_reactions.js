import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('message_remove_reactions', {
  "message0": "Remove all reactions from %1",
  "args0": [
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
  "tooltip": "Remove all reactions in a message",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:message_remove_reactions'] = function(block, generator) {
  var value_message = generator.valueToCode(block, 'message', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_message}.reactions.removeAll();\n`;
  return code;
};
