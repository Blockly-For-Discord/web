import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const poll_create = new Block('discordjs', 'poll_create', {
  "message0": "Create poll with name %1 duration (hours) %2 multi select %3 with answers %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "multi",
      "check": "Boolean"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "answers"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#bf70e3",
  "tooltip": "Create a poll",
  "helpUrl": ""
});

poll_create.attach();

b4d.javascriptGenerator.forBlock['discordjs:poll_create'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'name', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_time = generator.valueToCode(block, 'time', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_multi = generator.valueToCode(block, 'multi', b4d.javascriptGenerator.ORDER_ATOMIC);
  var statement_answers = generator.statementToCode(block, 'answers');
  var code = `var poll_${value_name.replaceAll(' ','_').replaceAll('-','_').replaceAll("'",'')} = {
  question: { text: ${value_name} },
  duration: ${value_time},
  allow_multiselect: ${value_multi},
  answers: [
  ${statement_answers}]
};\n`;
  return code;
};
