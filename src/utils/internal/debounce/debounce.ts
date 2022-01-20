import { Debounce } from "./debounce.types";

const timeouts: Map<string, any> = new Map();

const resetTimeout = (timeouts: Map<string, any>, callback: Function) => {
    clearTimeout(timeouts.get(callback.name));
    timeouts.delete(callback.name);
}

export const debounce: Debounce = (callback: Function, thisArg: any, parameters: any[], timeout: number) => {
    if (timeouts.has(callback.name)) {
        resetTimeout(timeouts, callback);
    }

    timeouts.set(callback.name,
        setTimeout(() => {
            callback.apply(thisArg, parameters);
            resetTimeout(timeouts, callback);
        }, timeout)
    );
}