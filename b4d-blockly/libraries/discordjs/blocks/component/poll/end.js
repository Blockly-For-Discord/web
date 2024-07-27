import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const poll_end = new Block('discordjs', 'poll_end', {
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
  "colour": "#bf70e3",
  "tooltip": "End the poll on a message",
  "helpUrl": ""
});

poll_end.attach();

b4d.javascriptGenerator.forBlock['discordjs:poll_end'] = function(block, generator) {
  var value_message = generator.valueToCode(block, 'message', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_message}.poll.end();\n`;
  return code;
};
