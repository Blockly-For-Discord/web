import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_follow', {
  "message0": "Follow %1 to %2 with reason %3",
  "args0": [
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    },
    {
      "type": "input_value",
      "name": "to",
      "check": ["Channel", "String"]
    },
    {
      "type": "input_value",
      "name": "reason",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.channel,
  "tooltip": "Follow a NEWS channel into a text a channel",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_follow'] = function(block, generator) {
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_to = generator.valueToCode(block, 'to', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_reason = generator.valueToCode(block, 'reason', b4d.javascriptGenerator.ORDER_ATOMIC);
  return `${value_channel}.addFollower(${value_to}, ${value_reason});\n`;
};