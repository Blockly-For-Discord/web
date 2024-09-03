import { Namespace } from '/b4d-blockly/namespaces.js';

// Colour blocks
b4d.BlocklyColour.installAllBlocks({
  javascript: b4d.javascriptGenerator
});

// DiscordJS
import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as DiscordJSBlocks from '/b4d-blockly/libraries/discordjs/blocks.js';
import { DiscordJSTooblox } from '/b4d-blockly/libraries/discordjs/index.js';

Namespace.registerAllOf('discordjs');

// Workspace & Toolbox
const workspace = b4d.Blockly.inject('blocklyDiv', {
  toolbox: DiscordJSTooblox,
  renderer: 'zelos',
  comments: false,
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
b4d.Blockly.ContextMenuItems.registerCommentOptions();

b4d.toolbox = DiscordJSTooblox;
b4d.workspace = workspace;

b4d.Blockly.setLocale(b4d.En);

/* Tooltips */
function tip(event) {
  if (!['create', 'toolbox_item_select', 'remove'].includes(event.type)) return;
  let blocks = Array.from(document.querySelectorAll('.blocklyWorkspace > .blocklyBlockCanvas .blocklyDraggable'))
  blocks.forEach(block => {
    tippy(block, {
      content: b4d.Blockly.Tooltip.getTooltipOfObject(b4d.workspace.getBlockById(block.getAttribute('data-id'))),
      delay: [1000, 0],
      sticky: true,
      moveTransition: 'transform 25ms ease-in-out'
    })
  })
}
function letool(a, b) {
  if (b.isInFlyout) {
    a.innerHTML = '<div>'+b4d.Blockly.Tooltip.getTooltipOfObject(b).split('\n').join('</div><div>')+'</div>'
  } else {
    a.style.display = `none`;
    a.style.visibility = `hidden`;
    a.style.opacity = `0`;
  }
}
b4d.Blockly.Tooltip.setCustomTooltip(letool)
b4d.workspace.addChangeListener(tip)

// Make toolbox look slightly better
var treeRowElements = document.getElementsByClassName('blocklyTreeRow');
for (var i = 0; i < treeRowElements.length; i++) {
  treeRowElements[i].style.marginLeft = window.getComputedStyle(treeRowElements[i]).paddingLeft;
  treeRowElements[i].style.paddingLeft = '0';
}
