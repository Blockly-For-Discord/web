import * as Blockly from 'blockly/core';
// Import the default blocks.
import * as libraryBlocks from 'blockly/blocks';
// Import a generator.
import {javascriptGenerator} from 'blockly/javascript';
// Import a message file.
import * as En from 'blockly/msg/en';
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


javascriptGenerator.forBlock['discordjs:aw_block'] = function(block, generator) {
    var value_name = generator.valueToCode(block, 'STRING', javascript.Order.ATOMIC);
    var code = `awwwwwwwww ${value_name}`;
    return code;
};