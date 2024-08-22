import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('message_content', {
  "message0": "message content",
  "output": "String",
  "colour": b4d.color.message,
  "tooltip": "Content of message",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:message_content'] = function(block, generator) {
  return [`message.content`, b4d.javascriptGenerator.ORDER_NONE];
};
