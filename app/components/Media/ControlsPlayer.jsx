import React from 'react'
import { observer, inject } from 'mobx-react';
import peer from '../../static/peer.svg';
import stop from '../../static/stop.svg';
import CONSTANTS from '../../constants';
import { Openexternal } from '../';

@inject('video') @observer
class ControlsPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            isShareOpen: false
        }
    }

    stopPlayer = () => {
        this.props.video.togglePlayer(0);
    }


    render() {
        const { peerCount, broadcasting } = this.props.video;
        const playerURL = `${CONSTANTS.webURL}${broadcasting}`;
        return (
          <div className="control-container">
            <ul className="control-actions">
              <li className="control-action">
                <button onClick={() => this.stopPlayer()} className="control-action-item__stop-label">
                  <i className="control-action-item__stop-icon" dangerouslySetInnerHTML={{ __html: stop }} />
                  <span>STOP</span>
                </button>
              </li>
              <li className="control-action">
                <Openexternal url={playerURL} />
              </li>
              <li className="control-action">
                <div className="control-action-item__counter-label">
                  <i className="control-action-item__counter-icon" dangerouslySetInnerHTML={{ __html: peer }} />
                  <span>PEER</span>
                </div>
                <strong>{peerCount}</strong>
              </li>

            </ul>
          </div>

        );
    }
}


export default ControlsPlayer
