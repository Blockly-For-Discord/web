import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_server', {
  "message0": "server of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    }
  ],
  "output": "Server",
  "colour": b4d.color.server,
  "tooltip": "Get the server of channel or a category",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_server'] = function(block, generator) {
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  return [`${value_channel}.guild`, b4d.javascriptGenerator.ORDER_NONE];
};