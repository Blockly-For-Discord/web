import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_reply = new Block('discordjs', 'message_reply', {
  "message0": "Reply %1 Mention %2 to %3",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "mention",
      "check": "Boolean"
    },
    {
      "type": "input_value",
      "name": "message",
      "check": "Message"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.message,
  "tooltip": "Reply to a message",
  "helpUrl": ""
});

message_reply.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_reply'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_mention = generator.valueToCode(block, 'mention', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_message = generator.valueToCode(block, 'message', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_message}.reply({ content: ${value_text}, allowedMentions: { repliedUser: ${value_mention} }});\n`;
  return code;
};
