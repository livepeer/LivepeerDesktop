import React from 'react'
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import CONSTANTS from '../../constants';

@inject('video')
@observer
class Loader extends React.Component {

    getClassState = () => classNames({
        loader: true
    })

    render() {
        const { store: loading } = this.props.video.loader;
        const { errors } = this.props.video.notifier;

        if (errors.length > 0) {
            // don't display loader when there is an error...
            return null;
        }

        const listItems = loading.map((key, i) => <li key={i}>{ CONSTANTS.loading[key] }</li>);

        return (
          <div className={this.getClassState()}>
            <ul>{ listItems }</ul>
          </div>
        );
    }
}


export default Loader
