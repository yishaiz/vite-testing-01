// import { logRoles } from '@testing-library/dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { expect } from 'vitest';

test('button starts with correct label and color', () => {
  // render App
  render(<App />);

  // logRoles(container);

  // find the button
  const buttonElement = screen.getByRole('button', { name: /blue/i });

  // check initial color
  expect(buttonElement).toHaveClass('red');
});

test('button has correct labeך and color after click', () => {
  // render App
  render(<App />);

  // find the button
  const buttonElement = screen.getByRole('button', { name: /blue/i });

  // click the button
  fireEvent.click(buttonElement);

  // check button text
  expect(buttonElement).toHaveTextContent(/red/i);
  // expect(colorButton.textContent).toBe('Change to red');

  // check the button color
});
