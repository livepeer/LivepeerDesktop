import React from 'react'
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import stop from '../../static/stop.svg';
import close from '../../static/close.svg';
import arrowRight from '../../static/arrowRight.svg';

@inject('video')
@observer
class Toggler extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            processSubmit: false
        };
    }

    getClassState = () => classNames({
        toggler__wrapper: true,
        'toggler__wrapper-playerFocused': this.state.focus
    })

    toggleRecord = () => {
        const { toggleBroadcasting } = this.props.video;
        return toggleBroadcasting();
    }

    toggleFocus = (focus) => {
        if (this.state.processSubmit) {
            return;
        }
        if (!focus) {
            this.playerID.innerText = '';
        }
        this.setState({ focus })
    }

    submitForm = () => {
        this.setState({ processSubmit: true });
        const strmID = this.playerID.innerText;
        this.props.video.togglePlayer(strmID);
    }

    render() {
        return (
          <div className={this.getClassState()}>
            <button className="toggler__broadcaster" onClick={() => this.toggleRecord()}>
              <span className="toggler__broadcaster-label">Rec</span>
              <span className="toggler__broadcaster_recording-label">Stop</span>
              <i className="toggler__broadcaster-icon" dangerouslySetInnerHTML={{ __html: stop }} />
            </button>
            <div className="toggler__player">
              <button className="toggler__player-button-cancel ">
                <i className="toggler__player-button-icon" dangerouslySetInnerHTML={{ __html: close }} />
              </button>
              <span
                ref={(c) => { this.playerID = c; }}
                onFocus={() => this.toggleFocus(true)}
                onBlur={() => this.toggleFocus(false)}
                contentEditable
                data-tooltip="or You have a Stream ID?" placeholder="Paste here your Stream ID"
              />
              <button onMouseDown={(e) => this.submitForm(e)} className="toggler__player-button-send withBorder" type="submit">
                <span className="toggler__player-button-label">View</span>
                <i className="toggler__player-button-icon" dangerouslySetInnerHTML={{ __html: arrowRight }} />
              </button>
            </div>
          </div>
        );
    }
}

export default Toggler
