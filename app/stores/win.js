import { observable, action } from 'mobx';

export default class WinStore {
  @observable fullscreen = false;
  @observable livepeer = false;


    constructor({ events }) {
        this.events = events;
      // keep toggle state
        this.events.on('fullscreen-toggled', (e, arg) => {
            this.fullscreen = arg;
        });
    }

  @action startLivePeer = () => {
      // Start livepeer
      this.events.send('startLivepeer');
  }

  @action toggle = () => {
      this.events.send('toggle-fullscreen-editor-window');
  }

}
