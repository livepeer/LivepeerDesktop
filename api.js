import log from 'electron-log';
import LivepeerEmitter from 'LivepeerEmitter';
import { main } from './config/config';

export const LivePeerAPI = () => new LivepeerEmitter({ config: main, log });
