import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_data_bool', {
  "message0": "is channel %1 %2?",
  "args0": [
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "nsfw",
          "nsfw"
        ],
        [
          "viewable",
          "viewable"
        ],
        [
          "manageable",
          "manageable"
        ],
        [
          "deletable",
          "deletable"
        ],
        [
          "full (vc)",
          "full"
        ],
        [
          "joinable (vc)",
          "joinable"
        ],
        [
          "speakable (vc)",
          "speakable"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": b4d.color.channel,
  "tooltip": "Get data from a channel or a category",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_data_bool'] = function(block, generator) {
  var dropdown_type = block.getFieldValue('type');
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  return [`${value_channel}.${dropdown_type}`, b4d.javascriptGenerator.ORDER_NONE];
};