import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('message_channel', {
  "message0": "message channel",
  "output": "Channel",
  "colour": b4d.color.channel,
  "tooltip": "Channel of message",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:message_channel'] = function(block, generator) {
  return [`message.channel`, b4d.javascriptGenerator.ORDER_NONE];
};
