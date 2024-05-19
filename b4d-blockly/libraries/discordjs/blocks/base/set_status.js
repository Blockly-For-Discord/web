import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const base_set_status = new Block('discordjs', 'base_set_status', {
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
          "Listening",
          "listening"
        ],
        [
          "Watching",
          "watching"
        ],
        [
          "Competing",
          "Competing"
        ],
        [
          "Playing",
          "playing"
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
  "colour": "#009dff",
  "tooltip": "Set the status of the bot",
  "helpUrl": ""
});

base_set_status.attach();


b4d.javascriptGenerator.forBlock['discordjs:base_set_status'] = function(block, generator) {
  var dropdown_status = block.getFieldValue('status');
  var dropdown_type = block.getFieldValue('type');
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `client.user.setPresence({
  status: ${dropdown_status},
  activities: [{
    name: ${value_text},
    type: ${dropdown_type}
  }]
});\n`;
    return code;
};
