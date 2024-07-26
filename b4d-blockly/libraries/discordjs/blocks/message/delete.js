import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const message_delete = new Block('discordjs', 'message_delete', {
  "message0": "Delete",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#05b55a",
  "tooltip": "Delete the message",
  "helpUrl": ""
});

message_delete.attach();

b4d.javascriptGenerator.forBlock['discordjs:message_delete'] = function(block, generator) {
  var code = `message.delete();\n`;
  return code;
};
