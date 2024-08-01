import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('message_reference', {
  "message0": "message",
  "output": "Message",
  "colour": b4d.color.message,
  "tooltip": "Reference of message",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:message_reference'] = function(block, generator) {
  return [`message`, b4d.javascriptGenerator.ORDER_NONE];
};
