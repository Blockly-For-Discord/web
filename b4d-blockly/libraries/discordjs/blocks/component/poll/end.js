import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('poll_end', {
  "message0": "End poll on %1",
  "args0": [
    {
      "type": "input_value",
      "name": "message",
      "check": "Message"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": b4d.color.poll,
  "tooltip": "End the poll on a message",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:poll_end'] = function(block, generator) {
  var value_message = generator.valueToCode(block, 'message', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_message}.poll.end();\n`;
  return code;
};
