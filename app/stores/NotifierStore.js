import { observable } from 'mobx';
import CONSTANTS from '../constants';

export default class NotifierStore {
  @observable errors = [];


    constructor({ events }) {
      // listener for loading state change
        this.events = events;
        events.on('notifier', (e, args) => {
            if (args.error) {
                this.updateErrors(args);
            }
        });
    }

    updateErrors = (args) => {
        const errorCode = args.error;
        const ghost = JSON.parse(JSON.stringify(this.errors));
        ghost.indexOf(errorCode) === -1 && ghost.push(errorCode);
        this.errors = ghost;
    }

    clearAllErrors = () => {
        const self = this;
        this.errors.forEach((e) => {
          /*
            Check if there is some loading state linked with the currents errors stack
            and remove them from their store
          */
            if (CONSTANTS.error[e].loadingKeys) {
                CONSTANTS.error[e].loadingKeys.forEach((loadingKey) => {
                    self.events.send('loading', { type: 'delete', key: loadingKey });
                });
            }
        });
      /* Clear the error stack */
        this.errors = [];
    }

    refreshApp = () => {
        this.events.send('criticalRefresh');
    }


}
