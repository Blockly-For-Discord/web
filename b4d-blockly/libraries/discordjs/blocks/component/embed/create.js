import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const embed_create = new Block('discordjs', 'embed_create', {
  "message0": "Create embed with name %1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_statement",
      "name": "inner"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#ee6a24",
  "tooltip": "Create an embed",
  "helpUrl": ""
});

embed_create.attach();

b4d.javascriptGenerator.forBlock['discordjs:embed_create'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'name', b4d.javascriptGenerator.ORDER_ATOMIC);
  var statement_inner = generator.statementToCode(block, 'inner');
  var code = `var embed_${value_name} = new EmbedBuilder()
  ${statement_inner};\n`;
  return code;
};
