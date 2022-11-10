import { Client } from '../Client';

export interface ListenerOptions {
  name: string;
  emitter: 'on' | 'once';
}

export abstract class Listener {
  client: Client;

  name: string;

  emitter: string;

  constructor(client: Client, data: ListenerOptions) {
    this.client = client;

    this.name = data.name;
    this.emitter = data.emitter;
  }

  override(...args: unknown[]): unknown {
    return { ...args };
  }
}
