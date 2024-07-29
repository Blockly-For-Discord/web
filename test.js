import { Block } from '/b4d-blockly/index.js';

// DiscordJS
import * as DiscordJS from './b4d-blockly/libraries/discordjs/blocks.js';
import { DiscordJStooblox } from './b4d-blockly/libraries/discordjs/index.js';

Block.registerAllOf('discordjs');

class CustomRenderer extends b4d.Blockly.zelos.Renderer {
  constructor(name) {
    super(name);
  }
}
b4d.Blockly.blockRendering.register('custom_renderer', CustomRenderer);

const workspace = b4d.Blockly.inject('blocklyDiv', {
  toolbox: DiscordJStooblox,
  renderer: 'custom_renderer',
  grid: {
    spacing: 20,
    length: 21,
    colour: '#292929'
  },
  move: {
    scrollbars: {
      horizontal: true,
      vertical: true
    },
    drag: true,
    wheel: true
  },
  zoom: {
    controls: true,
    wheel: true,
    pinch: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.4,
    scaleSpeed: 0.2
  }
});

b4d.toolbox = DiscordJStooblox;
b4d.workspace = workspace;

b4d.Blockly.setLocale(b4d.En);

// Make toolbox look slightly better
var treeRowElements = document.getElementsByClassName('blocklyTreeRow');
for (var i = 0; i < treeRowElements.length; i++) {
  treeRowElements[i].style.marginLeft = window.getComputedStyle(treeRowElements[i]).paddingLeft;
  treeRowElements[i].style.paddingLeft = '0';
}
