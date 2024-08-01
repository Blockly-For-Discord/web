import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('console_error', {
  "message0": "error",
  "output": "String",
  "colour": b4d.color.console,
  "tooltip": "The error that occured",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:console_error'] = function(block, generator) {
  return [`_ERROR`, b4d.javascriptGenerator.ORDER_NONE];
};
