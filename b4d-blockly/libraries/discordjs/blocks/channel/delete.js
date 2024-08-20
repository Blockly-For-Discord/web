import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_clone', {
  "message0": "delete %1 with reason %2",
  "args0": [
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
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
  "tooltip": "Delete a channel",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_clone'] = function(block, generator) {
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_reason = generator.valueToCode(block, 'reason', b4d.javascriptGenerator.ORDER_ATOMIC);
  return [`${value_channel}.delete(${value_reason});\n`, b4d.javascriptGenerator.ORDER_NONE];
};