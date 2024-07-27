import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_send = new Block('discordjs', 'message_send', {
  "message0": "Send %1 component %2 in %3",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "component",
      "check": "Component"
    },
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.message,
  "tooltip": "Respond to a message (sends message on channel)",
  "helpUrl": ""
});

message_send.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_send'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_component = generator.valueToCode(block, 'component', b4d.javascriptGenerator.ORDER_NONE);
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_channel}.send({
  content: ${value_text},
  ${value_component}
});\n`;
  return code;
};
