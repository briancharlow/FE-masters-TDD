import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const count = screen.getByTestId('counter-count');
    expect(count).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const decrementButton = screen.getByTestId('counter-decrement')
    // expect(decrementButton).toBeDisabled();
    const resetButton = screen.getByRole('button', {
      name: /reset/i,
    });
    expect(decrementButton).toHaveAttribute('disabled');
    expect(resetButton).toHaveAttribute('disabled');
  });

  it('displays "days" when the count is 0', () => {
    const unit = screen.getByTestId('counter-unit');
    expect(unit).toHaveTextContent('days');
  });

  it(
    'increments the count when the "Increment" button is clicked',
    async () => {
      const incrementButton = screen.getByRole('button', {
        name: /increment/i,
      });
      const count = screen.getByTestId('counter-count');
      await act(async () => {
        await userEvent.click(incrementButton);
      });
      expect(count).toHaveTextContent('1');
      await userEvent.click(incrementButton);
      expect(count).toHaveTextContent('2');

  
    },
  );

  it('displays "day" when the count is 1', async () => {
    const unit = screen.getByTestId('counter-unit');
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    })
  
    await userEvent.click(incrementButton);
    expect(unit.textContent).toBe('day'); 
   });

  it(
    'decrements the count when the "Decrement" button is clicked',
    async () => {
      const count = screen.getByTestId('counter-count');
      const incrementButton = screen.getByRole('button', {
        name: /increment/i,
      });
      const decrementButton = screen.getByRole('button', {
        name: /decrement/i,
      });

      await userEvent.click(incrementButton);
      await userEvent.click(incrementButton);
      expect(count).toHaveTextContent('2');
      await userEvent.click(decrementButton);
      expect(count).toHaveTextContent('1');


    },
  );

  it('does not allow decrementing below 0', async () => {
    const count = screen.getByTestId('counter-count');
    const decrementButton = screen.getByRole('button', {
      name: /decrement/i,
    });
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });

    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    expect(count).toHaveTextContent('2');

    await userEvent.click(decrementButton);
    await userEvent.click(decrementButton);
    expect(count).toHaveTextContent('0');
    expect(decrementButton).toHaveAttribute('disabled');
  });

  it(
    'resets the count when the "Reset" button is clicked',
    async () => {
      const count = screen.getByTestId('counter-count');
      const incrementButton = screen.getByRole('button', {
        name: /increment/i,
      });
      const resetButton = screen.getByRole('button', {
        name: /reset/i,
      });
      await userEvent.click(incrementButton);
      await userEvent.click(incrementButton);
      expect(count).toHaveTextContent('2');
      await userEvent.click(resetButton);
      expect(count.textContent).toBe('0');
      expect(resetButton).toBeDisabled();
    },
  );

  it(
    'disables the "Decrement" and "Reset" buttons when the count is 0',
    async() => {
      const count = screen.getByTestId('counter-count');
      const decrementButton = screen.getByRole('button', {
        name: /decrement/i,
      });
      const incrementButton = screen.getByRole('button', {
        name: /increment/i,
      });
      const resetButton = screen.getByRole('button', {
        name: /reset/i,
      });
      await userEvent.click(incrementButton);
      await userEvent.click(incrementButton);
      expect(count).toHaveTextContent('2');
      await userEvent.click(resetButton);
      expect(count).toHaveTextContent('0');
      expect(decrementButton).toHaveAttribute('disabled');
      expect(resetButton).toHaveAttribute('disabled');
    },
  );

  it('updates the document title based on the count', async () => {
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    const decrementButton = screen.getByRole('button', {
      name: /decrement/i,
    });
    const count = screen.getByTestId('counter-count');
    const unit = screen.getByTestId('counter-unit');
    await userEvent.click(incrementButton);
    expect(document.title).toBe('1 day — Accident Counter');
    await userEvent.click(decrementButton);
    expect(document.title).toBe('0 days — Accident Counter');
  });
});
