import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('message_server', {
  "message0": "message server",
  "output": "Server",
  "colour": b4d.color.server,
  "tooltip": "Server of message",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:message_server'] = function(block, generator) {
  return [`message.guild`, b4d.javascriptGenerator.ORDER_NONE];
};
