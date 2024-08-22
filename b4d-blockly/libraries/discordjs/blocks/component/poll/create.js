import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('poll_create', {
  "message0": "Create poll with name %1 question %2 duration (hours) %3 multi select %4 with answers %5 %6",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "question",
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
      "name": "answers",
      "Check": "Answers"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.poll,
  "tooltip": "Create a poll",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:poll_create'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'name', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_question = generator.valueToCode(block, 'question', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_time = generator.valueToCode(block, 'time', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_multi = generator.valueToCode(block, 'multi', b4d.javascriptGenerator.ORDER_ATOMIC);
  var statement_answers = generator.statementToCode(block, 'answers');
  var code = `var poll_${value_name.replaceAll(' ','_').replaceAll('-','_').replaceAll("'",'')} = {
  question: { text: ${value_question} },
  duration: ${value_time},
  allow_multiselect: ${value_multi},
  answers: [
${statement_answers}  ]
};\n`;
  return code;
};
