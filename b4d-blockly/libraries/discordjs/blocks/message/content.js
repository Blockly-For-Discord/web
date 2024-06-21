import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_content = new Block('discordjs', 'message_content', {
  "message0": "message content",
  "output": "String",
  "colour": "#05b55a",
  "tooltip": "Content of message",
  "helpUrl": ""
});

message_content.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_content'] = function(block, generator) {
  return [`message.content`, b4d.javascriptGenerator.ORDER_NONE];
};
