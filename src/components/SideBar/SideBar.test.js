import React from 'react';
import { render } from '@testing-library/react';
import SideBar from './index';
import { MemoryRouter } from 'react-router-dom';

test('it renders', () => {
  render(<MemoryRouter>
    <SideBar />
  </MemoryRouter>);
});
