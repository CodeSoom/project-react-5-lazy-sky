/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import React from 'react';
import App from './App';

describe('App', () => {
  it('App', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('경기장')).not.toBeNull();
  });
});
