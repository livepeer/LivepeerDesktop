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
        this.player.on('playing', () => {
            if (props.onPlaying) {
                return props.onPlaying();
            }
        });
    }

    render() {
        return (
          <div data-vjs-player>
            <video
              ref={(node) => { this.videoNode = node }}
              className="video-js"
            />
          </div>
        )
    }
}


export default Video
