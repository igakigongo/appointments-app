import React from 'react';
import { render } from '@testing-library/react';
import App from './index';
import { MemoryRouter } from 'react-router-dom';

test('it renders', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  render(<MemoryRouter>
    <App />
  </MemoryRouter>);
});
