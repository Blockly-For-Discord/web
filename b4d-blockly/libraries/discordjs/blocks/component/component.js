import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('component', {
  "message0": "Create component with %1 embeds %2 poll %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "embed",
      "check": "String"
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

function clean(txt) {
  return txt.replaceAll(' ','_').replaceAll('-','_').replaceAll("'",'').replaceAll(".",'').replaceAll(",",'');
}

b4d.javascriptGenerator.forBlock['discordjs:component'] = function(block, generator) {
  var value_embed = generator.valueToCode(block, 'embed', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_poll = generator.valueToCode(block, 'poll', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `${embed.length > 2 ? `embeds: [${value_embed.split(',').map(e=>'embed_'+clean(e.trim()).join(', '))}],\n` : ''}${value_poll.length > 2 ? `poll: poll_${clean(value_poll)},\n` : ''}`;
  return [code, b4d.javascriptGenerator.ORDER_NONE];
};
