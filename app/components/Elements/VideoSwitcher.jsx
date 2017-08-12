import React from 'react'
import { ipcRenderer } from 'electron';
import { observer, inject } from "mobx-react";
import { Video } from '../';

let recorderProps = {
	autoplay: true,
	controls: false,
	sources: [{
	  src: '',
	  type: 'video/mp4'
	}]
};

let playerProps = {
	autoplay: true,
	controls: true,
	sources: [{
	  src: '',
	  type: 'application/x-mpegURL'
	}]
};

@inject("video") @observer
class VideoSwitcher extends React.Component {
	constructor(props) {
      super(props);
	  this.state = {
		  url: '',
		  videoJsOptions: {}
	  }
  	}

	componentDidMount = () => {

		const { playing, broadcasting } = this.props.video;

		/* broadcasting state ?*/
		if (!playing && navigator.getUserMedia) {
    		this.webcamPrep();
    		// this.refs.camera.addEventListener("playing", this.isPlaying);
        } else {
            // not supported

        }
	}


	webcamPrep = () => {
		const self = this;
	    navigator.mediaDevices.enumerateDevices().then((sourceInfos) => {
            const { newVideoSource } = this.props.video;
            for (let i = 0; i != sourceInfos.length; ++i){
                if (sourceInfos[i].kind === 'videoinput') {
                    newVideoSource(sourceInfos[i]);
                }
            }
            self.playVideo();
	    })
	}

	successCallback = (stream) => {
		const url = window.URL.createObjectURL(stream);
        const self = this;
        var mediaStreamTrack = stream.getVideoTracks()[0];
        if (typeof mediaStreamTrack != "undefined") {
            mediaStreamTrack.onended = function () {//for Chrome.
                // busy camera
                self.props.video.toggleCamera(false);
				ipcRenderer.send('notifier', { error:5 });
            }

            this.setState({ url })
            // this.props.video.setVideoUrl(url);
            // this.refs.camera.play();

        } else {
            // permission denied
        }

	}

	errorCallback = (err) => {
	    console.log('Rejected', err);
	}

	playVideo = () => {
		const self = this;
	    const { videoIndex } = this.props.video;

	    var constraints = {
	      audio: false,
	      video: true,
	      optional: [
	        { width: 650 },
	        { width: { min: 650 }},
	        { frameRate: 60 },
	        { width: { max: 800 }},
	        { facingMode: "user" }
	      ]
	    }

	    return navigator.webkitGetUserMedia(
	        constraints,
	        self.successCallback,
	        self.errorCallback
	    );

	}

	isPlaying = () => {
		return this.props.video.toggleCamera(true)
	}


	render() {

		const { playing, broadcasting } = this.props.video;
		let props;

		if (!this.state.url && !playing) {
			/* url of media not yet ready...*/
			return null;
		}

		if (playing) {
			playerProps.sources[0].src = playing;
			props = playerProps;
		} else {
			recorderProps.sources[0].src = this.state.url;
			recorderProps.onPlaying = this.isPlaying;
			props = recorderProps;
		}

		return (
			<div className='video-wrapper'>
			 	<Video { ...props }  />
			</div>
		);
	}
}


export default VideoSwitcher
