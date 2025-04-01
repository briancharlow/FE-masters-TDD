import { test, expect, vi } from 'vitest';



const logSpy = vi.spyOn(console, 'log');
test('a super simple test', () => {
 console.log('this is a spy');
expect(logSpy).toHaveBeenCalled();

});
