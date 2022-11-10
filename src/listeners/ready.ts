import { Client } from '../Client';
import { Listener } from '../domain/Listener';

export default class extends Listener {
  constructor(client: Client) {
    super(client, {
      name: 'ready',
      emitter: 'once',
    });
  }

  override() {
    this.client.guilds.cache
      .get(process.env.DEVELOPMENT_GUILD)
      .commands.set(this.client.commands);

    console.log('Client is Ready!');
  }
}
