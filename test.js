import { Namespace } from '/b4d-blockly/namespaces.js';

// DiscordJS
import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as DiscordJSBlocks from '/b4d-blockly/libraries/discordjs/blocks.js';
import { DiscordJSTooblox } from '/b4d-blockly/libraries/discordjs/index.js';

Namespace.registerAllOf('discordjs');

// Workspace & Toolbox
class CustomRenderer extends b4d.Blockly.zelos.Renderer {
  constructor() {
    super();
  }
}
b4d.Blockly.blockRendering.register('custom_renderer', CustomRenderer);

const workspace = b4d.Blockly.inject('blocklyDiv', {
  toolbox: DiscordJSTooblox,
  renderer: 'custom_renderer',
  grid: {
    spacing: 30,
    length: 31,
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
let pattern = document.getElementById(workspace.getRenderer().getConstants().disabledPatternId);
pattern.setAttribute('width', '20');
pattern.setAttribute('height', '27.5');
pattern.setAttribute('patternTransform', 'scale(3) rotate(125)');
pattern.innerHTML = `<rect width="100%" height="100%" fill="#888"></rect><path d="M0 10h20z" stroke-width="9" stroke="#ffffff" fill="none"/>`;
b4d.Blockly.FieldCheckbox.CHECK_CHAR = '\u2714';

b4d.toolbox = DiscordJSTooblox;
b4d.workspace = workspace;

b4d.Blockly.setLocale(b4d.En);

// Make toolbox look slightly better
var treeRowElements = document.getElementsByClassName('blocklyTreeRow');
for (var i = 0; i < treeRowElements.length; i++) {
  treeRowElements[i].style.marginLeft = window.getComputedStyle(treeRowElements[i]).paddingLeft;
  treeRowElements[i].style.paddingLeft = '0';
}
