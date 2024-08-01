import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('base_shutdown', {
  "message0": "Shutdown bot",
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.base,
  "tooltip": "Stop the bot",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:base_shutdown'] = function(block, generator) {
  var code = `client.destroy();\n`;
  return code;
};
