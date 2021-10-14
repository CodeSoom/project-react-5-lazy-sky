/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import React from 'react';
import Stadium from './Stadium';

describe('Stadium', () => {
  it('Stadium', () => {
    const { getByText } = render((
      <Stadium />
    ));

    expect(getByText('경기장')).not.toBeNull();
  });
});
