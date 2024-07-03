import { act } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page under construction message', () => {
  act(() => {
    render(<App />);
  });
  const headerElement = screen.getByText(/atenção! página em construção!/i);
  expect(headerElement).toBeInTheDocument();
});
