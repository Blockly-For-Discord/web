import * as Blockly from './components/webpack/blocklycompressed.bundle.js';
// import './components/b4d-blockly/libraries/discordjs/blocks/test.js';
import { DiscordJStooblox } from './components/b4d-blockly/libraries/discordjs/index.js';
import * as DiscordJS from './components/b4d-blockly/libraries/discordjs/blocks.js';

const workspace = b4d.Blockly.inject('blocklyDiv', {
  toolbox: DiscordJStooblox,
  renderer: 'zelos'
});

b4d.toolbox = DiscordJStooblox;
b4d.workspace = workspace;

b4d.Blockly.setLocale(b4d.En);

let b4d = {};

b4d.register = function(Name, Data) {
  
  b4d.Blockly.Blocks[Name] = {
    init: function() {
      this.jsonInit(Data);
    }
  }
}  