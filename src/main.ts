import { ActivityType } from 'discord.js';
import { Client } from './Client';

const client = new Client({
  intents: ['Guilds', 'GuildMembers'],
  presence: {
    status: 'online',
    activities: [
      { name: 'Made by Producti', type: ActivityType.Watching },
    ],
  },
}, process.env.TOKEN);

client
  .connect()
  .registerListeners()
  .registerCommands();
