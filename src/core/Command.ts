import { ApplicationCommandOptionData, CommandInteraction } from 'discord.js';
import { ExtendedClient } from './Client';

export interface CommandOptions {
  name: string;
  description: string;
  options?: ApplicationCommandOptionData[];
}

export abstract class Command {
  client: ExtendedClient;

  name: string;

  description: string;

  options: ApplicationCommandOptionData[];

  constructor(client: ExtendedClient, data: CommandOptions) {
    Object.assign(this, data);

    this.client = client;
  }

  override(interaction: CommandInteraction): unknown {
    return { interaction };
  }
}
