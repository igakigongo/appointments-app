import React from 'react';
import { render } from '@testing-library/react';
import SideBar from './index';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';

test('it renders', () => {
  render(<MemoryRouter>
    <Provider store={store}>
      <SideBar />
    </Provider>
  </MemoryRouter>);
});
