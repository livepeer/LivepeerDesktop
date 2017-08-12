import React from 'react';

class Video extends React.Component {

  componentDidMount() {
    // instantiate video.js
    this.player = videojs(this.videoNode, this.props);
    this.player.ready(this.onReady(this.props));
  }

  componentWillReceiveProps = (props) => {
    /* change video */
    this.player.pause();
    this.player.controls(props.controls);
    this.player.controls(props.controls);
    this.player.src(props.sources);

  }

  // destroy player on unmount
  componentWillUnmount() {
      this.player && this.player.dispose()
  }

  onReady = (props) => {
      console.log('onPlayerReady', this.player)
      this.player.on('playing', () => {
         if(props.onPlaying) {
             return props.onPlaying();
         }
      });
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div data-vjs-player>
        <video ref={ node => this.videoNode = node } className="video-js"></video>
      </div>
    )
  }
}


export default Video
