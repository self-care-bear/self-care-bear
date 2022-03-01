import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('there is a home page', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  screen.getByText(/hello, world!/i);
});
