import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('base_env', {
  "message0": "Get process.env. %1",
  "args0": [
    {
      "type": "input_value",
      "name": "var",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": b4d.color.base,
  "tooltip": "Get a environmental variable",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:base_env'] = function(block, generator) {
  var value_var = generator.valueToCode(block, 'var', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `process.env[${value_var}]`;
  return [code, b4d.javascriptGenerator.ORDER_NONE];
};
