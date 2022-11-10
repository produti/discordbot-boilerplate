import { ApplicationCommandOptionData, CommandInteraction } from 'discord.js';
import { Client } from '../Client';

export interface CommandOptions {
  name: string;
  description: string;
  options?: ApplicationCommandOptionData[];
}

export abstract class Command {
  client: Client;

  name: string;

  description: string;

  options: ApplicationCommandOptionData[];

  constructor(client: Client, data: CommandOptions) {
    Object.assign(this, data);

    this.client = client;
  }

  override(interaction: CommandInteraction): unknown {
    return { interaction };
  }
}
