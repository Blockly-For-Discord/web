import * as Blockly from './components/webpack/blocklycompressed.bundle.js';

const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Control",
        "contents": [
          {
            "kind": "block",
            "type": "controls_if"
          },
        ]
      },
      {
        "kind": "category",
        "name": "Logic",
        "contents": [
          {
            "kind": "block",
            "type": "logic_compare"
          },
          {
            "kind": "block",
            "type": "logic_operation"
          },
          {
            "kind": "block",
            "type": "logic_boolean"
          }
        ]
      }
    ]
  }
  

const workspace = b4d.Blockly.inject('blocklyDiv', {toolbox: toolbox});
  
b4d.Blockly.setLocale(b4d.En);


const preset = {
  "name" : "",
  "type" : "library/extension/theme/custom",
  "id" : "some_lowercase_id",
  "version" : "1.0.0",
  "authors" : "HitByDonnerSchlag and Inv",
  "description" : "Whatever this thing does...",
  "data" : { },
}

const library_preset = {
  "name" : "",
  "type" : "library",
  "id" : "my_custom_lib_translator",
  "version" : "1.0.0",
  "authors" : "Inventionpro",
  "data" : {
    "file-tree" : "./relative src",
    "blocks" : "./folder src",
  }
}

const extension_preset = {
  "name" : "",
  "type" : "library",
  "id" : "my_custom_lib_translator",
  "version" : "1.0.0",
  "authors" : "Inventionpro",
  "data" : {
    "namespace" : "myextension",
    "blocks" : "./folder src",
  },
}
/* 

a 'namespace' is a unique identifier seperate from the extension id so multiple blocks from different extensions can have the same block id
without interfering with eachother. For example, if the extensions namespace is "my_extension" and it has a block with an id "example_block" the id will automatically
turn into 'my_extension:example_block' 

this way there can be multiple blocks with the same id:
- extension_1:custom_block
- extension_2:custom_block
- extension_3:custom_block


the following namespaces are reserved and cannot be taken:
- 'b4d_*' - reserved for the default site blocks (like b4d_discordjs and b4d_discordpy)
- 'example'

more can be added to the list without further notice
*/