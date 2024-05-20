import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const base_login = new Block('discordjs', 'base_login', {
  "message0": "Start bot with token %1",
  "args0": [
    {
      "type": "input_value",
      "name": "token",
      "check": "String"
    }
  ],
  "colour": "#009dff",
  "tooltip": "Start your discord bot with a token",
  "helpUrl": ""
});

base_login.attach();

b4d.javascriptGenerator.forBlock['discordjs:base_login'] = function(block, generator) {
  var value_token = generator.valueToCode(block, 'token', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');

const client = new Client({
  intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences ]
});

client.once(Events.ClientReady, c => {
  console.log(\`Ready! Logged in as \${c.user.tag} \`);
});

client.login(${value_token});\n`;
  return code;
};
