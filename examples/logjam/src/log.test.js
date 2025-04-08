import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';
// import { sendToServer } from './send-to-server';

// const sendMock = vi.mock('./send-to-server', () => {
//     return { sendToServer: vi.fn() };
// })


describe('logger', () => {
    describe('development', () =>{
        // beforeEach(() => {
        //     vi.stubEnv('MODE', 'development');
        // });

        // afterEach(() => {
        //     vi.restoreAllMocks();
        // });

        it('should log in development', () => {
         const logSpy = vi.fn()
         
         log('test message', 'development', logSpy);

        expect(logSpy).toHaveBeenCalled();
        });
    })
    describe('production', () => {
        beforeEach(() => {
            vi.stubEnv('MODE', 'production');
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it('should not call the console log', () => {
            const logSpy = vi.spyOn(console, 'log')
            log('test message');
            expect(logSpy).not.toHaveBeenCalledWith('test message');
            // expect(sendMock.sendToServer).toHaveBeenCalled();
        });
    });
});
