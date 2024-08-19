import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_last_message', {
  "message0": "last message of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    }
  ],
  "output": "Message",
  "colour": b4d.color.message,
  "tooltip": "Get the last message of a channel",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_last_message'] = function(block, generator) {
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  return [`${value_channel}.lastMessage`, b4d.javascriptGenerator.ORDER_NONE];
};