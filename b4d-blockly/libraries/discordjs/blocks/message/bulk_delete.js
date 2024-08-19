import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('message_bulk_delete', {
  "message0": "Bulk delete %1 message in %2",
  "args0": [
    {
      "type": "input_value",
      "name": "amount",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "channel",
      "check": "Channel"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.message,
  "tooltip": "Bulk delete messages",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:message_delete'] = function(block, generator) {
  var value_amount = generator.valueToCode(block, 'amount', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_channel = generator.valueToCode(block, 'channel', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_channel}.bulkDelete(${value_amount});\n`;
  return code;
};
