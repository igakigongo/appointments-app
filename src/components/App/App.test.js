import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

test('it renders', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  render(<App />);
});
