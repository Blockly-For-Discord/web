import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_send = new Block('discordjs', 'message_send', {
  "message0": "Send %1 in %2",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.message,
  "tooltip": "Respond to a message (sends message on channel)",
  "helpUrl": ""
});

message_send.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_send'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_channel}.send({
  content: ${value_text}
});\n`;
  return code;
};
