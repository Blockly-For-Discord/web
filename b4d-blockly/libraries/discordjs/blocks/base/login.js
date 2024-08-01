import { discordjs } from '/b4d-blockly/libraries/discordjs.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

discordjs.createBlock('base_login', {
  "message0": "Start bot with token %1",
  "args0": [
    {
      "type": "input_value",
      "name": "token",
      "check": "String"
    }
  ],
  "colour": b4d.color.base,
  "tooltip": "Start your discord bot with a token",
  "helpUrl": ""
});

b4d.javascriptGenerator.forBlock['discordjs:base_login'] = function(block, generator) {
  var value_token = generator.valueToCode(block, 'token', b4d.javascriptGenerator.ORDER_ATOMIC);
  var code = `const { ActivityType, Client, Events, EmbedBuilder, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildPresences ]
});

client.once(Events.ClientReady, c => {
  console.log(\`Ready! Logged in as \${c.user.tag} \`);
});

client.login(${value_token});\n`;
  return code;
};
