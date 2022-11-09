import { ClientOptions, Client } from 'discord.js';
import { resolve } from 'path';

import { readFolder } from '../utils/folders';
import { Listener } from './Listener';
import { Command } from './Command';

export type Constructable<T> = new (...args: unknown[]) => T;

export class ExtendedClient extends Client {
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
    readFolder<Constructable<Listener>>(resolve(__dirname, '../listeners'))
      .map((Event) => new Event(this))
      .forEach((evt) => this[evt.emitter](evt.name, (...args: unknown[]) => evt.override(...args)));

    return this;
  }

  registerCommands(): this {
    this.commands = readFolder<Constructable<Command>>(resolve(__dirname, '../commands'))
      .map((Command) => new Command(this));

    return this;
  }
}
