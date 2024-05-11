import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

export const ExampleBlock = "aw_block";

export const ExampleBlockData = {
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
};


/*b4d.Blockly.Blocks[ExampleBlock] = {
    init: function() {
        this.jsonInit(ExampleBlockData);
    }
};*/

// b4d.register(ExampleBlock, ExampleBlockData);

b4d.javascriptGenerator.forBlock['aw_block'] = function(block, generator) {
    var value_name = generator.valueToCode(block, 'STRING', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = `awwwwwwwww ${value_name}`;
    return code;
  };
