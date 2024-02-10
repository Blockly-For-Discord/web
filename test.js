import * as Blockly from './components/webpack/blocklycompressed.bundle.js';

const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Core",
        "contents": [
          {
            "kind": "block",
            "type": "controls_if"
          },
          {
            "kind": "block",
            "type": "logic_compare"
          },
        ]
      },
      {
        "kind": "category",
        "name": "Custom",
        "contents": [
          {
            "kind": "block",
            "type": "start"
          },
          {
            "kind": "category",
            "name": "Move",
            "contents": [
              {
                "kind": "block",
                "type": "move_forward"
              }
            ]
          },
          {
            "kind": "category",
            "name": "Turn",
            "contents": [
              {
                "kind": "block",
                "type": "turn_left"
              }
            ]
          }
        ]
      }
    ]
  }

const workspace = b4d.Blockly.inject('blocklyDiv', {toolbox: toolbox});