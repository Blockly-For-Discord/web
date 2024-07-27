import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const component = new Block('discordjs', 'component', {
  "message0": "Create component with %1 poll %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "poll",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "output": "Component",
  "colour": b4d.color.component,
  "tooltip": "Create a component (All inputs optional)",
  "helpUrl": ""
});

component.attach();

b4d.javascriptGenerator.forBlock['discordjs:component'] = function(block, generator) {
  var value_poll = generator.valueToCode(block, 'poll', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${value_poll.length > 2 ? `poll: poll_${value_poll.replaceAll(' ','_').replaceAll('-','_').replaceAll("'",'')},\n` : ''}`;
  return [code, b4d.javascriptGenerator.ORDER_NONE];
};
