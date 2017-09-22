import { observable } from 'mobx';

export default class LoaderStore {
      @observable store = [2]; /* initial is video aquisition*/

    constructor({ events }) {
          // listener for loading state change
        this.events = events;

        this.events.on('loading', (e, arg) => {
            this.updateLoading(arg);
        });
    }

    updateLoading = (args) => {
        const { type, key } = args;
        const ghost = JSON.parse(JSON.stringify(this.store));

        if (type === 'delete') {
            ghost.indexOf(key) > -1 && ghost.splice(ghost.indexOf(key), 1);
        }
        if (type === 'add') {
            ghost.indexOf(key) === -1 && ghost.push(key);
        }

        this.store = ghost;
    }
}
