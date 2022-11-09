import { ActivityType } from 'discord.js';
import { ExtendedClient } from './core/Client';

const client = new ExtendedClient({
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
