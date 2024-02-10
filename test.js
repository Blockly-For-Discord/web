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