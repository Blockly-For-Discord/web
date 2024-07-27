import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const console_error = new Block('discordjs', 'console_error', {
  "message0": "error",
  "output": "String",
  "colour": b4d.color.console,
  "tooltip": "The error that occured",
  "helpUrl": ""
});

console_error.attach();

b4d.javascriptGenerator.forBlock['discordjs:console_error'] = function(block, generator) {
  return [`_ERROR`, b4d.javascriptGenerator.ORDER_NONE];
};
