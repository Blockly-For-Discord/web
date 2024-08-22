import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_data_num', {
  "message0": "get number %1 from %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "position",
          "position"
        ],
        [
          "raw position",
          "rawPosition"
        ],
        [
          "slowmode (sec)",
          "rateLimitPerUser"
        ],
        [
          "thread archive duration (min)",
          "defaultAutoArchiveDuration"
        ],
        [
          "default emoji (forum)",
          "defaultReactionEmoji"
        ],
        [
          "post slowmode (forum)",
          "defaultThreadRateLimitPerUser"
        ],
        [
          "default layout (forum, auto:0;list:1;gallery:2)",
          "defaultForumLayout"
        ],
        [
          "sort order (forum, activity:0;creation:1)",
          "defaultSortOrder"
        ],
        [
          "bitrate (vc)",
          "bitrate"
        ],
        [
          "user limit (vc)",
          "userLimit"
        ],
        [
          "video quality (vc, auto:1;full:2;)",
          "videoQualityMode"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    }
  ],
  "output": "Number",
  "colour": b4d.color.channel,
  "tooltip": "Get data from a channel or a category",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_data_num'] = function(block, generator) {
  var dropdown_type = block.getFieldValue('type');
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  return [`${value_channel}.${dropdown_type}`, b4d.javascriptGenerator.ORDER_NONE];
};