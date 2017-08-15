import { observable, action } from 'mobx';
import { ipcRenderer } from 'electron';
import LoaderStore from './LoaderStore';
import NotifierStore from './NotifierStore';
import { pad } from '../helpers';

let clearTimer;

export default class VideoStore {
  @observable name = ''
  @observable camera = false;
  @observable videoUrl = false;
  @observable peerCount = 0;
  @observable timer = 0;


  @observable videoSource = [];
  @observable videoIndex = 0;
  @observable videoSourceLength = 0;


  // recording/playing ID ref
  @observable broadcasting = 0;
  @observable playing = 0;

    constructor() {
        this.notifier = new NotifierStore();
        this.loader = new LoaderStore();

        ipcRenderer.on('broadcast', (e, { hlsStrmID }) => {
            this.timer = hlsStrmID ? this.startTimer() : clearInterval(clearTimer);
            this.broadcasting = hlsStrmID || 0;

            hlsStrmID && this.loader.updateLoading({ type: 'delete', key: 3 });
        });

        ipcRenderer.on('play', (e, { videoURL }) => {
            videoURL && this.loader.updateLoading({ type: 'delete', key: 4 });
            this.broadcasting = 0;
            this.playing = videoURL || 0;
        });
    }

  @action startTimer = () => {
      const self = this;
      let sec = 0;
      this.timer = 0;

      clearTimer = setInterval(() => {
          console.log('timer interval +1s');
          const seconds = pad(++sec % 60);
          const minutes = pad(parseInt(sec / 60, 10));
          self.timer = `${minutes}:${seconds}`;
      }, 1000);
  }

  @action toggleCamera = (state) => {
      this.camera = state;
      state && this.loader.updateLoading({ type: 'delete', key: 2 });

      /* prevent add before delete at the same time
      which can happen on initial camera aquisition.... */
      !this.playing && !state && setTimeout(() => {
          this.loader.updateLoading({ type: 'add', key: 2 });
      }, 200);
  }

  @action toggleBroadcasting = (strmID) => {
      !this.broadcasting && this.loader.updateLoading({ type: 'add', key: 3 });
      ipcRenderer.send('broadcast', { fromState: this.broadcasting });
  }

  @action togglePlayer = (strmID) => {
      strmID && this.loader.updateLoading({ type: 'add', key: 4 });
      ipcRenderer.send('play', { strmID });
  }

  @action setVideoUrl = (url) => {
      this.videoUrl = url;
  }

  @action newVideoSource = (source) => {
      this.videoSource.push(source);
  }

}
