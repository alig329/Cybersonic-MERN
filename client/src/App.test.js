import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react'; 
import App from './App';

test('renders navbar', async () => {
  await act(async () => {
    render(<App />);
  });
  const navElement = screen.getByText(/navbar/i);
  expect(navElement).toBeInTheDocument();
});
