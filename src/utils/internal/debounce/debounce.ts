const timeouts: Map<string, any> = new Map();
export const debounce = (callback: Function, thisArg: any, parameters: any[], timeout: number) => {
    if (!timeouts.has(callback.name)) {
        timeouts.set(callback.name,
            setTimeout(() => {
                callback.apply(thisArg, parameters);
                clearTimeout(timeouts.get(callback.name));
                timeouts.delete(callback.name);
            }, timeout)
        );
    }
}