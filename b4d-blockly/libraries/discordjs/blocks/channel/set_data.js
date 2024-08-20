import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_set_data', {
  "message0": "set %1 to %2 in %3 with reason %4",
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
          "nsfw",
          "nsfw"
        ],
        [
          "topic",
          "topic"
        ],
        [
          "position",
          "position"
        ],
        [
          "slowmode (secs)",
          "rateLimitPerUser"
        ],
        [
          "thread auto archive (min)",
          "defaultAutoArchiveDuration"
        ],
        [
          "follow category permissions",
          "lockPermissions"
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
          "user limit (vc)",
          "userLimit"
        ],
        [
          "bitrate (vc)",
          "bitrate"
        ],
        [
          "rtc region (vc)",
          "rtcRegion"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "in",
      "check": ["String", "Number", "Boolean"]
    },
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
  "tooltip": "Edit the data of a channel or a category (reason is optional)",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_set_data'] = function(block, generator) {
  var dropdown_type = block.getFieldValue('type');
  var value_in = generator.valueToCode(block, 'in', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_reason = generator.valueToCode(block, 'reason', b4d.javascriptGenerator.ORDER_ATOMIC);
  return `${value_channel}.edit({
  ${dropdown_type}: ${value_in}${value_reason.length > 2 ? ',\nreason: '+value_reason : ''}
});\n`;
};