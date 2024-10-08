import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('base_set_status', {
  "message0": "Set bot status to %1 %2 type %3 %4 text %5",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "status",
      "options": [
        [
          "Online",
          "online"
        ],
        [
          "Idle",
          "idle"
        ],
        [
          "Do Not Disturb",
          "dnd"
        ],
        [
          "Offline",
          "offline"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "Playing",
          "Playing"
        ],
        [
          "Listening",
          "Listening"
        ],
        [
          "Watching",
          "Watching"
        ],
        [
          "Custom",
          "Custom"
        ],
        [
          "Competing",
          "Competing"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "text"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.base,
  "tooltip": "Set the status of the bot",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:base_set_status'] = function(block, generator) {
  var dropdown_status = block.getFieldValue('status');
  var dropdown_type = block.getFieldValue('type');
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `client.user.setPresence({
  status: '${dropdown_status}',
  activities: [{
    name: ${value_text},
    type: ActivityType.${dropdown_type}
  }]
});\n`;
    return code;
};
