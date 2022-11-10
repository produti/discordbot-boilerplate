import { CommandInteraction } from 'discord.js';

import { Client } from '../Client';
import { Command } from '../domain/Command';

export default class extends Command {
  constructor(client: Client) {
    super(client, {
      name: 'ping',
      description: 'See the latency',
    });
  }

  override(interaction: CommandInteraction): void {
    interaction.reply({ content: `${this.client.ws.ping}` });
  }
}
