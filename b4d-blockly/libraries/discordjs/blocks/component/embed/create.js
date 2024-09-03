import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('embed_create', {
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
  "colour": b4d.color.embed,
  "tooltip": "Create an embed",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:embed_create'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'name', b4d.javascriptGenerator.ORDER_ATOMIC);
  var statement_inner = generator.statementToCode(block, 'inner');
  var code = `var embed_${value_name.replaceAll(' ','_').replaceAll('-','_').replaceAll("'",'').replaceAll(".",'').replaceAll(",",'')} = new EmbedBuilder()
  ${statement_inner};\n`;
  return code;
};
