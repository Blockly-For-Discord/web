import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_category', {
  "message0": "category of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    }
  ],
  "output": "Channel",
  "colour": b4d.color.channel,
  "tooltip": "Get the category of a channel",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_category'] = function(block, generator) {
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  return [`${value_channel}.parent`, b4d.javascriptGenerator.ORDER_NONE];
};