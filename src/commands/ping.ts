import { CommandInteraction } from 'discord.js';

import { ExtendedClient } from '../core/Client';
import { Command } from '../core/Command';

export default class extends Command {
  constructor(client: ExtendedClient) {
    super(client, {
      name: 'ping',
      description: 'See the latency',
    });
  }

  override(interaction: CommandInteraction): void {
    interaction.reply({ content: `${this.client.ws.ping}` });
  }
}
