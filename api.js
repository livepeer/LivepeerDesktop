import log from 'electron-log';
import { main } from '../config/config';
import LivepeerEmitter from 'LivepeerEmitter';

const api = new LivepeerEmitter({ config: main, log });
export default api;
