import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const text_has = new Block('discordjs', 'text_has', {
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "in",
      "check": "String"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "includes",
          "includes"
        ],
        [
          "starts with",
          "startsWith"
        ],
        [
          "ends with",
          "endsWith"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "out",
      "check": "String"
    }
  ],
  "output": "Boolean",
  "colour": "#5ba58c",
  "tooltip": "Check a string if it contains, starts or ends with something",
  "helpUrl": ""
});

text_has.attach();

b4d.javascriptGenerator.forBlock['discordjs:text_has'] = function(block, generator) {
  var value_in = generator.valueToCode(block, 'in', b4d.javascriptGenerator.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  var value_out = generator.valueToCode(block, 'out', b4d.javascriptGenerator.ORDER_ATOMIC);
  return [`${value_in}.${dropdown_type}(${value_out})`, b4d.javascriptGenerator.ORDER_NONE];
};
