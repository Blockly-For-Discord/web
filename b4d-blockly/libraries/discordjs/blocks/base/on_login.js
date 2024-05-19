import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const base_on_login = new Block('discordjs', 'base_on_login', {
  "message0": "When bot connects",
    "args0": [
      {
        "type": "input_statement",
        "name": "in"
      }
    ],
    "colour": "#009dff",
    "tooltip": "Do something when the bot gets connected",
    "helpUrl": ""
});

base_on_login.attach();

b4d.javascriptGenerator.forBlock['discordjs:base_on_login'] = function(block, generator) {
    var statement_in = generator.statementToCode(block, 'in');
    var code = `client.on(Events.ClientReady, async() => {
  ${statement_in}
});\n`;
    return code;
};
