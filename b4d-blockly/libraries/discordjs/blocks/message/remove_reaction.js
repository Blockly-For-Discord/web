import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const remove_reaction = new Block('discordjs', 'remove_reaction', {
  "message0": "Remove %1 reactions from %2",
  "args0": [
    {
      "type": "input_value",
      "name": "emoji",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "message",
      "check": "Message"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#05b55a",
  "tooltip": "Remove a specific reaction in a message",
  "helpUrl": ""
});

remove_reaction.attach();

b4d.javascriptGenerator.forBlock['discordjs:remove_reaction'] = function(block, generator) {
  var value_emoji = generator.valueToCode(block, 'emoji', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_message = generator.valueToCode(block, 'message', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_message}.reactions.cache.get(${value_emoji}).remove();\n`;
  return code;
};
