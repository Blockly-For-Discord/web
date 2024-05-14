import * as Blockly from './components/webpack/blocklycompressed.bundle.js';
// import './components/b4d-blockly/libraries/discordjs/blocks/test.js';
import { DiscordJStooblox } from './b4d-blockly/libraries/discordjs/index.js';
import * as DiscordJS from './b4d-blockly/libraries/discordjs/blocks.js';



register('discordjs', 'aw_block');
const workspace = b4d.Blockly.inject('blocklyDiv', {
  toolbox: DiscordJStooblox,
  renderer: 'zelos'
});

b4d.toolbox = DiscordJStooblox;
b4d.workspace = workspace;

b4d.Blockly.setLocale(b4d.En);

