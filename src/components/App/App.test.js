import React from 'react';
import { render } from '@testing-library/react';
import App from './index';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

test('it renders', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  render(<MemoryRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </MemoryRouter>);
});
