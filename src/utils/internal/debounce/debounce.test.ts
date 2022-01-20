import { debounce } from "./debounce";

describe("debounce", () => {
    let mapDelete = jest.spyOn(Map.prototype, 'delete');
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        mapDelete = mapDelete.mockReset();
    });

    afterAll(() => {
        jest.useRealTimers();
    });
    it("calls function after a specified amount of time", () => {
        const firstCallback = jest.fn((name, age) => {});
        const params = ['test', 1];
        const timeout = 100;
        debounce(firstCallback, null, params, timeout);
        jest.advanceTimersByTime(100);
        expect(firstCallback).toHaveBeenCalledTimes(1);
        expect(firstCallback).toHaveBeenCalledWith(params[0], params[1]);
    });
    it("doesn't call function before the specified amount of time", () => {
        const secondCallback = jest.fn((name, age) => {});
        const params = ['test', 1];
        const timeout = 100;
        debounce(secondCallback, null, params, timeout);
        jest.advanceTimersByTime(99);
        expect(secondCallback).toHaveBeenCalledTimes(0);
    });
    it("calls function after a specified amount of time and deletes previously stored timer reference", () => {
        const thirdCallback = jest.fn((name, age) => {});
        const params = ['test', 1];
        const timeout = 100;
        debounce(thirdCallback, null, params, timeout);
        debounce(thirdCallback, null, params, timeout);
        jest.advanceTimersByTime(100);
        expect(thirdCallback).toHaveBeenCalledTimes(1);
        expect(mapDelete).toHaveBeenCalledTimes(3);
        expect(thirdCallback).toHaveBeenCalledWith(params[0], params[1]);
    });
});