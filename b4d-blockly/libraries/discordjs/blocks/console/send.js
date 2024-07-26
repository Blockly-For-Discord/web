import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const console_send = new Block('discordjs', 'console_send', {
  "message0": "send %1 type %2 to console",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "log",
          "log"
        ],
        [
          "info",
          "info"
        ],
        [
          "warn",
          "warn"
        ],
        [
          "error",
          "error"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8D5BCA",
  "tooltip": "Send a message to the console / terminal",
  "helpUrl": ""
});

console_send.attach();

b4d.javascriptGenerator.forBlock['discordjs:console_send'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  var code = `console.${dropdown_type}(${value_text});\n`;
  return code;
};
