import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('message_get', {
  "message0": "Get message with id %1 on channel %2 then %3",
  "args0": [
    {
      "type": "input_value",
      "name": "id",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    },
    {
      "type": "input_statement",
      "name": "then"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.message,
  "tooltip": "Get a message",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:message_get'] = function(block, generator) {
  var value_id = generator.valueToCode(block, 'id', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  const statement_then = generator.statementToCode(block, 'then');
  return `${value_channel}.messages.fetch(${value_id})
  .then(message => {
    ${statement_then}
  });\n`;
};