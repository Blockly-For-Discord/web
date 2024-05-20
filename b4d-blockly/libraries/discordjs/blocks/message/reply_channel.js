import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_reply_channel = new Block('discordjs', 'message_reply_channel', {
  "message0": "Respond %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0040ff",
  "tooltip": "Respond to a message (sends message on channel)",
  "helpUrl": ""
});

message_reply_channel.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_reply_channel'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `message.channel.send({ content: ${value_text}});\n`;
  return code;
};
