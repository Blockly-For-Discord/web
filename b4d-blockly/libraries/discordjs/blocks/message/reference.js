import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_reference = new Block('discordjs', 'message_reference', {
  "message0": "message",
  "output": "Message",
  "colour": "#05b55a",
  "tooltip": "Reference of message",
  "helpUrl": ""
});

message_reference.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_reference'] = function(block, generator) {
  return [`message`, b4d.javascriptGenerator.ORDER_NONE];
};
