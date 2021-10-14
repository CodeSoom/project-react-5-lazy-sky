/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import React from 'react';
import Stadium from './Stadium';

describe('Stadium', () => {
  const stadiums = [
    { name: 'Porte de la Chapelle Arena', sportsList: ['배드민턴', '리듬 체조'] },
    { name: 'Eiffel Tower Stadium', sportsList: ['비치 발리볼'] },
  ];

  it('Stadium', () => {
    const { getByText } = render((
      <Stadium />
    ));

    expect(getByText('Porte de la Chapelle Arena')).not.toBeNull();
    expect(getByText('Eiffel Tower Stadium')).not.toBeNull();
  });
});
