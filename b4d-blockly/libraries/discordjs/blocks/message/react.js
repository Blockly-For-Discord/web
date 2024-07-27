import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_react = new Block('discordjs', 'message_react', {
  "message0": "React with %1 to %2",
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
  "colour": "#05b55a",
  "tooltip": "React to a message (with a unicode character or custom emoji id)",
  "helpUrl": ""
});

message_react.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_react'] = function(block, generator) {
  var value_emoji = generator.valueToCode(block, 'emoji', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_message = generator.valueToCode(block, 'message', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_message}.react(${value_emoji});\n`;
  return code;
};
