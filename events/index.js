import { appEvents } from './events.app';
import { livepeerEvents } from './events.livepeer';
import { ffmpegEvents } from './events.ffmpeg';

export const events = (config) => {
    appEvents(config);
    livepeerEvents(config);
    ffmpegEvents(config);
};
