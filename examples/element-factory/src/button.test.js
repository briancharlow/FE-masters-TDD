import { createButton } from './button.js';
import { fireEvent, screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

describe('createButton', () => {

  afterEach(() => {
    document.body.innerHTML = ''; // Clear the DOM after each test
  })
  it('should create a button element', () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button', {name: 'Click Me'});

 
  });

  it('should have the text "Click Me"', () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button', {name: 'Click Me'});

    expect(button.textContent).toBe('Click Me');
  });
  it('should change the text to "Clicked!" when clicked', async () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button', {name: 'Click Me'});

    await userEvent.click(button);
    // fireEvent(button, new MouseEvent('click')
    // );
    expect(button.textContent).toBe('Clicked!');
  });
});
