import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_channel = new Block('discordjs', 'message_channel', {
  "message0": "message channel",
  "output": "Channel",
  "colour": b4d.color.channel,
  "tooltip": "Channel of message",
  "helpUrl": ""
});

message_channel.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_channel'] = function(block, generator) {
  return [`message.channel`, b4d.javascriptGenerator.ORDER_NONE];
};
