import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('base_on_login', {
  "message0": "When bot connects %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "in"
      }
    ],
    "colour": b4d.color.base,
    "tooltip": "Do something when the bot gets connected",
    "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:base_on_login'] = function(block, generator) {
    var statement_in = generator.statementToCode(block, 'in');
    var code = `client.on(Events.ClientReady, async() => {
  ${statement_in}
});\n`;
    return code;
};
