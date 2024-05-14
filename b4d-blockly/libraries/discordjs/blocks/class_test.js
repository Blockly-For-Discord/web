import { Block } from '/b4d-blockly/index.js';

const MyBlock = new Block('discordjs', 'aw_block', {
    "message0": "%1 aw",
    "args0": [
    {
        "type": "input_value",
        "name": "STRING",
        "check": [ "Number", "String" ]
    }
    ],
    "output": "Number",
    "colour": "#D14081",
    "tooltip": "",
    "helpUrl": ""
});
MyBlock.attach();


b4d.javascriptGenerator.forBlock['aw_block'] = function(block, generator) {
    var value_name = generator.valueToCode(block, 'STRING', javascript.Order.ATOMIC);
    var code = `awwwwwwwww ${value_name}`;
    return code;
};