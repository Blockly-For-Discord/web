import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('message_on_message', {
  "message0": "When message received %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "in"
    }
  ],
  "colour": b4d.color.message,
  "tooltip": "Do something when a message is received",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:message_on_message'] = function(block, generator) {
  var statement_in = generator.statementToCode(block, 'in');
  var code = `client.on(Events.MessageCreate, async(message) => {
${statement_in}});\n`;
  return code;
};
