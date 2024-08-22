import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('message_delete', {
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

b4d.javascriptGenerator.forBlock['discordjs:message_delete'] = function(block, generator) {
  var value_message = generator.valueToCode(block, 'message', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_message}.delete();\n`;
  return code;
};
