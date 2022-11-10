/* eslint-disable no-unused-expressions */
import { Interaction } from 'discord.js';

import { Client } from '../Client';
import { Listener } from '../domain/Listener';

export default class extends Listener {
  constructor(client: Client) {
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
