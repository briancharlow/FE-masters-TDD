import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

vi.useFakeTimers();

function delay(callback) {
  setTimeout(() => {
    callback('Delayed');
  }, 1000);
}

describe('delay function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime('2025-04-08')
  });
  afterEach(() => {
    vi.useRealTimers();
  });
  it('should call callback after delay', () => {
    const callback = vi.fn();
    delay(callback);
    // vi.advanceTimersByTime(1000);
   // Fast-forward time by 1000ms

    vi.advanceTimersToNextTimer(); // Fast-forward to the next timer
    expect(callback).toHaveBeenCalled();
  });
});
