import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_create', {
  "message0": "Create channel in server %1 with name %2 type %3 then %4",
  "args0": [
    {
      "type": "input_value",
      "name": "server",
      "check": "Server"
    },
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "text",
          "GuildText"
        ],
        [
          "news",
          "GuildAnnouncement"
        ],
        [
          "voice",
          "GuildVoice"
        ],
        [
          "stage",
          "GuildStageVoice"
        ],
        [
          "forum",
          "GuildForum"
        ],
        [
          "media",
          "GuildMedia"
        ],
        [
          "category",
          "GuildCategory"
        ]
      ]
    },
    {
      "type": "input_statement",
      "name": "then"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.channel,
  "tooltip": "Create a channel",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_create'] = function(block, generator) {
  var value_server = generator.valueToCode(block, 'server', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_name = generator.valueToCode(block, 'name', b4d.javascriptGenerator.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  const statement_then = generator.statementToCode(block, 'then');
  return `${value_server}.channels.create({
  name: ${value_name}
  type: ChannelType.${dropdown_type}
})
  .then(channel => {
    ${statement_then}
  });\n`;
};