import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio name after loading', async () => {
  render(<App />);
  const heading = await screen.findByText(/Oshila/i);
  expect(heading).toBeInTheDocument();
});
