import { ExtendedClient } from '../core/Client';
import { Listener } from '../core/Listener';

export default class extends Listener {
  constructor(client: ExtendedClient) {
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
