import { debounce } from "./debounce";

describe("debounce", () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });
    afterAll(() => {
        jest.useRealTimers();
    });
    it("calls function after a specified amount of time", () => {
        const callback = jest.fn((name, age) => {});
        const params = ['test', 1];
        const timeout = 100;
        debounce(callback, null, params, timeout);
        jest.advanceTimersByTime(100);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(params[0], params[1]);
    });
    it("doesn't call function before the specified amount of time", () => {
        const callback = jest.fn((name, age) => {});
        const params = ['test', 1];
        const timeout = 100;
        debounce(callback, null, params, timeout);
        jest.advanceTimersByTime(99);
        expect(callback).toHaveBeenCalledTimes(0);
    });
});