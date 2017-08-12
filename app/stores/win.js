import { observable, action } from 'mobx'
import { ipcRenderer } from 'electron';

export default class WinStore {
  @observable fullscreen = false;
  @observable livepeer = false;


  constructor () {
      // keep toggle state
      ipcRenderer.on('fullscreen-toggled', (e, arg) => {
          this.fullscreen = arg
      });
  }

  @action startLivePeer = () => {
      // Start livepeer
      ipcRenderer.send("startLivepeer");
  }

  @action toggle = () => {
    ipcRenderer.send('toggle-fullscreen-editor-window');
  }

}
