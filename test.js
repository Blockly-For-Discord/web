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

function customTooltip(block) {
    // Create a div element
    var tooltipDiv = document.createElement('div');
    // Add your custom content to the div
    tooltipDiv.innerHTML = 'Custom Tooltip Content';
    // Return the div element
    return tooltipDiv;
  }
  
  // Set the custom tooltip function to the block
  block.setTooltip(customTooltip);
b4d.Blockly.setLocale(b4d.En);