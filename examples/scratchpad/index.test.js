import { test, expect, vi } from 'vitest';




test('should spy on functions', () => {
    // const mockfn =vi.fn();

    const logSpy = vi.spyOn(console, 'log');
    console.log('this is a spy');
    expect(logSpy).toHaveBeenCalled();
    // expect(mockfn).toHaveBeenCalledWith('this is a spy');
    // expect(mockfn).toHaveBeenCalledTimes(1);
    // expect(mockfn).toHaveBeenCalledOnce();


});


//combining spies and mocks

const randomMock = vi.spyOn(Math, 'random').mockImplementation(() => 0.5);
test('Math.random is mocked', () => {
    expect(Math.random()).toBe(0.5);
});
