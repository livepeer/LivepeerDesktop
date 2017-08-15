import React from 'react'
import { observer, inject } from 'mobx-react';
import peer from '../../static/peer.svg';
import camera from '../../static/camera.svg';
import share from '../../static/share.svg';
import CONSTANTS from '../../constants';
import { Modal, Clipboard, Openexternal } from '../';

@inject('video') @observer
class ControlsBrodcast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            isShareOpen: false
        }
    }

    toggleShare = () => {
        this.setState({
            isShareOpen: !this.state.isShareOpen
        });
    }

    render() {
        const { peerCount, broadcasting, timer } = this.props.video;
        const playerURL = `${CONSTANTS.webURL}${broadcasting}`;
        return (
          <div className="control-container">
            <ul className="control-actions">
              <li className="control-action">
                <div className="control-action-item__timer-label">
                  <i className="control-action-item__timer-icon" dangerouslySetInnerHTML={{ __html: camera }} />
                  <span>LIVE</span>
                </div>
                <strong className="control-action-item__timer-time">{ timer || '00:00' }</strong>
              </li>
              <li className="control-action">
                <div className="control-action-item__counter-label">
                  <i className="control-action-item__counter-icon" dangerouslySetInnerHTML={{ __html: peer }} />
                  <span>PEER</span>
                </div>
                <strong>{peerCount}</strong>
              </li>
              <li className="control-action">
                <button onClick={() => this.toggleShare()} className="control-action-item__share-label withBorder">
                  <i className="control-action-item__share-icon" dangerouslySetInnerHTML={{ __html: share }} />
                  <strong>Share</strong>
                </button>
              </li>
            </ul>

            <Modal show={this.state.isShareOpen} onClose={this.toggleShare}>
              <i className="modal-icon" dangerouslySetInnerHTML={{ __html: share }} />
              <h1>Share</h1>
              <div className="fieldset">
                <div className="legend">
                  <u>Stream ID</u>
                  <Clipboard copyLabel="Copy ID" value={broadcasting} />
                </div>
                <code className="breakWord txt">{broadcasting}</code>
                <div className="note">
                  <b>Note: </b>Any connected peer can copy the stream ID into the Livepeer Desktop to see the stream.
                </div>
              </div>
              <div className="fieldset">
                <div className="legend">
                  <u>Web Player</u>
                  <Clipboard copyLabel="Copy url" value={playerURL} /> <Openexternal class="withBorder withBorder-light" url={playerURL} />
                </div>
              </div>
            </Modal>
          </div>

        );
    }
}


export default ControlsBrodcast
