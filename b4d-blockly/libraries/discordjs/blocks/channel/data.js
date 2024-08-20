import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_data', {
  "message0": "get %1 from %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "name",
          "name"
        ],
        [
          "id",
          "id"
        ],
        [
          "topic",
          "topic"
        ],
        [
          "last message id",
          "lastMessageId"
        ],
        [
          "category id",
          "parentId"
        ],
        [
          "server id",
          "guildId"
        ],
        [
          "url",
          "url"
        ],
        [
          "rtc region (vc)",
          "rtcRegion"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    }
  ],
  "output": "String",
  "colour": b4d.color.channel,
  "tooltip": "Get data from a channel or a category",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_data'] = function(block, generator) {
  var dropdown_type = block.getFieldValue('type');
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  return [`${value_channel}.${dropdown_type}`, b4d.javascriptGenerator.ORDER_NONE];
};