import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_remove_reactions = new Block('discordjs', 'message_remove_reactions', {
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
  "colour": "#05b55a",
  "tooltip": "Remove all reactions in a message",
  "helpUrl": ""
});

message_remove_reactions.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_remove_reactions'] = function(block, generator) {
  var value_message = generator.valueToCode(block, 'message', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_message}.reactions.removeAll();\n`;
  return code;
};
