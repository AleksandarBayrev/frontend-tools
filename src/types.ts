import {EventEmitter} from "./utils/external";
import {Debounce} from "./utils/internal";
export interface FrontendTools {
    eventEmitter: EventEmitter
    debounce: Debounce
}