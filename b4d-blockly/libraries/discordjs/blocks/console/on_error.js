import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const console_on_error = new Block('discordjs', 'console_on_error', {
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
  "colour": b4d.color.console,
  "tooltip": "When a error occurs run some code (Only use one)",
  "helpUrl": ""
});

console_on_error.attach();

b4d.javascriptGenerator.forBlock['discordjs:console_on_error'] = function(block, generator) {
  var statements_inner = generator.statementToCode(block, 'inner');
  var code = `let process = require('process');
process.on('uncaughtException', function(_ERROR) {
${statements_inner}});\n`;
  return code;
};
