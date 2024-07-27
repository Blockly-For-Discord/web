import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const base_shutdown = new Block('discordjs', 'base_shutdown', {
  "message0": "Shutdown bot",
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.base,
  "tooltip": "Stop the bot",
  "helpUrl": ""
});

base_shutdown.attach();

b4d.javascriptGenerator.forBlock['discordjs:base_shutdown'] = function(block, generator) {
  var code = `client.destroy();\n`;
  return code;
};
