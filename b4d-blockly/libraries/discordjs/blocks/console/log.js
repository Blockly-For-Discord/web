import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const console_log = new Block('discordjs', 'console_log', {
  "message0": "Log %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#8D5BCA",
  "tooltip": "Log something to the console / terminal",
  "helpUrl": ""
});

console_log.attach();

b4d.javascriptGenerator.forBlock['discordjs:console_log'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'text', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `console.log(${value_text});\n`;
  return code;
};
