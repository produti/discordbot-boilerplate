/* eslint-disable no-unused-expressions */
import { Interaction } from 'discord.js';

import { ExtendedClient } from '../core/Client';
import { Listener } from '../core/Listener';

export default class extends Listener {
  constructor(client: ExtendedClient) {
    super(client, {
      name: 'interactionCreate',
      emitter: 'on',
    });
  }

  override(interaction: Interaction) {
    if (!interaction.isCommand()) return;

    const command = this.client.commands.find((c) => c.name === interaction.commandName);
    command && command.override(interaction);
  }
}
