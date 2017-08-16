import React from 'react'
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import CONSTANTS from '../../constants';
import angry from '../../static/angry.svg';

@inject('video')
@observer
class Notifier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            critical: false,
            listErrors: []
        }
    }

    getClassState = () => {
        const { errors } = this.props.video.notifier;

        return classNames({
            notifier: true,
            'notifier-error': errors.length > 0,
            'notifier-critical': this.state.isCritical
        })
    }

    componentWillReact = () => {
        const { errors } = this.props.video.notifier;
        /* critical mean an app restart is required (eg: camera is busy) */
        let isCritical;
        const listErrors = errors.map((key, i) => {
            if (CONSTANTS.error[key].critical) {
                isCritical = true;
            }
            return (<li key={i}>
              { CONSTANTS.error[key].message }
            </li>)
        })

        this.setState({ listErrors, isCritical });
    }

    render() {
        const { clearAllErrors, refreshApp } = this.props.video.notifier;

        return (
          <div className={this.getClassState()}>
            <div className="notifier-title">
              <i className="notifier-title-icon" dangerouslySetInnerHTML={{ __html: angry }} />
              <h1 className="notifier-title-text">{ this.state.isCritical ? 'That\'s bad!' : 'Sorry!'}</h1>
            </div>
            <ul className="notifier-list">
              { this.state.listErrors }
              { !this.state.isCritical && <button onClick={() => clearAllErrors()} className="notifier-list-close">OK</button> }
              { this.state.isCritical && <button onClick={() => refreshApp()} className="notifier-list-close">Retry</button> }
            </ul>
          </div>
        );
    }
}


export default Notifier
