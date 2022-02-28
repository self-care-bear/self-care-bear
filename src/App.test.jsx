import { render, screen } from '@testing-library/react';
import App from './App';

test('there is a home page', () => {
  render(<App />);

  screen.getByText(/hello, world!/i);
});
