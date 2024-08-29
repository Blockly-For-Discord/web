import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_created', {
  "message0": "created channel",
  "output": "String",
  "colour": b4d.color.channel,
  "tooltip": "Created channel",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_created'] = function(block, generator) {
  return [`channel`, b4d.javascriptGenerator.ORDER_NONE];
};