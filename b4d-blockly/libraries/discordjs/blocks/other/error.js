import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('other_error', {
  "message0": "error",
  "output": "String",
  "colour": b4d.color.other,
  "tooltip": "The error that occured",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:other_error'] = function(block, generator) {
  return [`error`, b4d.javascriptGenerator.ORDER_NONE];
};
