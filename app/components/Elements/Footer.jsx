import React from 'react'
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import { Link } from 'react-router';
import ICO_fullscreen from '../../static/fullscreen.svg';
import ICO_fullscreenExit from '../../static/fullscreen-exit.svg';

@inject('win') @observer
class Footer extends React.Component {
    getClassState = () => {
        const { fullscreen } = this.props.win;

        return classNames({
            'window-footer': true,
            'window-footer__visible': true,
            fullscreen
        })
    }

    toggleFullscreen = () => {
        const { toggle } = this.props.win;
        return toggle();
    }

    render() {
        const { fullscreen } = this.props.win;
        return (
          <footer className={this.getClassState()}>
            <ul>
              <li className="window__controls">
                <button
                  onClick={() => this.toggleFullscreen()}
                  className="window__controls-fullscreen"
                  dangerouslySetInnerHTML={{ __html: fullscreen ? ICO_fullscreenExit : ICO_fullscreen }}
                />
              </li>
            </ul>
          </footer>
        );
    }
}


export default Footer
