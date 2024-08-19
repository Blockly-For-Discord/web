import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('channel_get', {
  "message0": "get channel/category with %1 equal to %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "id",
          "id"
        ],
        [
          "name",
          "name"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "in",
      "check": "String"
    }
  ],
  "output": "Channel",
  "colour": b4d.color.channel,
  "tooltip": "Get a channel or a category",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:channel_get'] = function(block, generator) {
  var dropdown_type = block.getFieldValue('type');
  var value_in = generator.valueToCode(block, 'in', b4d.javascriptGenerator.ORDER_ATOMIC);
  let code = `client.channels.cache.${dropdown_type === 'id' ? 'get' : 'find'}(${dropdown_type === 'id' ? value_in : '(channel) => channel.name === '+value_in});`;
  return [code, b4d.javascriptGenerator.ORDER_NONE];
};