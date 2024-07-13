import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_react = new Block('discordjs', 'message_react', {
  "message0": "React with %1",
  "args0": [
    {
      "type": "input_value",
      "name": "emoji",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#05b55a",
  "tooltip": "React to a message (with a unicode character or custom emoji id)",
  "helpUrl": ""
});

message_react.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_react'] = function(block, generator) {
  var value_emoji = generator.valueToCode(block, 'emoji', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `message.react(${value_emoji});\n`;
  return code;
};
