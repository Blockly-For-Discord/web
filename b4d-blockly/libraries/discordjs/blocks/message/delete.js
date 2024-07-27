import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_delete = new Block('discordjs', 'message_delete', {
  "message0": "Delete message %1",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "Message"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.message,
  "tooltip": "Delete the message",
  "helpUrl": ""
});

message_delete.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_delete'] = function(block, generator) {
  var value_message = generator.valueToCode(block, 'message', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_message}.delete();\n`;
  return code;
};
