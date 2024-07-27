import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const poll_answer = new Block('discordjs', 'poll_answer', {
  "message0": "Answer with text %1 emoji %2",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "emoji",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "previousStatement": "Answers",
  "nextStatement": "Answers",
  "colour": "#bf70e3",
  "tooltip": "Add an answer to a poll (emoji is optional)",
  "helpUrl": ""
});

poll_answer.attach();

b4d.javascriptGenerator.forBlock['discordjs:poll_answer'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_emoji = generator.valueToCode(block, 'emoji', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `{
    text: ${value_text}${value_emoji.length > 2 ? `,\n  emoji: ${value_emoji}` : ''}
  },\n`;
  return code;
};
