import { Block } from '/b4d-blockly/index.js';
import * as Blockly from '/components/webpack/blocklycompressed.bundle.js';

const base_login_advanced = new Block('discordjs', 'base_login_advanced', {
    "message0": "Start bot with token %1 Listen to Events %2 Mobile? %3",
    "args0": [
      {
        "type": "input_value",
        "name": "token",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "intents",
        "check": "Array"
      },
      {
        "type": "field_checkbox",
        "name": "mobile",
        "checked": false
      }
    ],
    "inputsInline": false,
    "colour": "#009dff",
    "tooltip": "Start your bot with more control",
    "helpUrl": ""
});

base_login_advanced.attach();


b4d.javascriptGenerator.forBlock['discordjs:base_login_advanced'] = function(block, generator) {
  var value_token = generator.valueToCode(block, 'token', b4d.javascriptGenerator.ORDER_ATOMIC);
  var value_intents = generator.valueToCode(block, 'intents', javascript.Order.ATOMIC);
  var value_mobile = block.getFieldValue('mobile') === 'TRUE';
  var code = `const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: ${value_intents}${value_mobile ? ',\n  ws: { properties: { browser: "Discord iOS" }}':''}
});

client.once(Events.ClientReady, c => {
  console.log(\`Ready! Logged in as \${c.user.tag} \`);
});

client.login(${value_token});\n`;
    return code;
};
