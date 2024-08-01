import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('message_edit', {
  "message0": "Edit %1 to %2",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "Message"
    },
    {
      "type": "input_value",
      "name": "content",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.message,
  "tooltip": "Edit a message (It must be sent by the bot)",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:message_edit'] = function(block, generator) {
  var value_message = generator.valueToCode(block, 'message', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_content = generator.valueToCode(block, 'content', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_message}.edit({
  content: ${value_content}
});\n`;
  return code;
};
