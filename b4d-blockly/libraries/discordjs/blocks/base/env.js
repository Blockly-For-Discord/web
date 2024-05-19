import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const base_env = new Block('discordjs', 'base_env', {
  "message0": "Get process.env. %1",
  "args0": [
    {
      "type": "input_value",
      "name": "var",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": "#009dff",
  "tooltip": "Get a environmental variable",
  "helpUrl": ""
});

base_env.attach();

b4d.javascriptGenerator.forBlock['discordjs:base_env'] = function(block, generator) {
  var value_var = generator.valueToCode(block, 'var', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `process.env[${value_var}]`;
  return code;
};
