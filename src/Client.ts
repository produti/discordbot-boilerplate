import { ClientOptions, Client as DiscordClient } from 'discord.js';

import { readFolder } from './utils/folders';
import { Listener } from './domain/Listener';
import { Command } from './domain/Command';

export type Constructable<T> = new (...args: unknown[]) => T;

export class Client extends DiscordClient {
  commands: Command[];

  constructor(clientOptions: ClientOptions, token: string) {
    super(clientOptions);

    this.token = token;
    this.commands = [];
  }

  connect(): this {
    super.login(this.token);

    return this;
  }

  registerListeners(): this {
    readFolder<Constructable<Listener>>('../listeners')
      .map((Event) => new Event(this))
      .forEach((evt) => this[evt.emitter](evt.name, (...args: unknown[]) => evt.override(...args)));

    return this;
  }

  registerCommands(): this {
    this.commands = readFolder<Constructable<Command>>('../commands')
      .map((Command) => new Command(this));

    return this;
  }
}
