import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const console_send = new Block('discordjs', 'console_send', {
  "message0": "When error occurs %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "inner"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8D5BCA",
  "tooltip": "When a error occurs run some code (Only use one)",
  "helpUrl": ""
});

console_send.attach();

b4d.javascriptGenerator.forBlock['discordjs:console_send'] = function(block, generator) {
  var statements_inner = generator.statementToCode(block, 'inner');
  var code = `let process = require('process');
process.on('uncaughtException', function(err) {
${statements_inner}});\n`;
  return code;
};
