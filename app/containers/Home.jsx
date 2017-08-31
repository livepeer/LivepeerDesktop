import React from 'react'
import { inject, observer } from 'mobx-react'
import {
        Header,
        Footer,
        Loader,
        Placeholder,
        Controls,
        VideoSwitcher,
        Notifier } from '../components';

import classNames from 'classnames';

@inject('video')
@observer
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    getClassState = () => {
        const { broadcasting, playing, loader } = this.props.video;
        const hasLoading = loader.store.length;


        return classNames({
            app: true,
            'content-container': true,
            waiting: !playing && !broadcasting,
            recording: broadcasting,
            playing,
            loading: hasLoading
        })
    }

    render() {
        const { broadcasting, playing, loader } = this.props.video;
        const hasLoading = loader.store.length;

        return (
          <content className={this.getClassState()}>
            <Header />
            { ((!broadcasting && !playing) || hasLoading > 0) && <Placeholder /> }
            <div className="app-actions">
              { hasLoading === 0 ? <Controls /> : <Loader /> }
            </div>
            <Notifier />
            <VideoSwitcher />
            <Footer />
          </content>
        )
    }
}

export default Home
