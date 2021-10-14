/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from '@testing-library/react';

import React from 'react';
import StadiumsContainer from './StadiumsContainer';

describe('StadiumsContainer', () => {
  it('renders names of stadiums', () => {
    const { getByText } = render((
      <StadiumsContainer />
    ));

    expect(getByText('Porte de la Chapelle Arena')).not.toBeNull();
    expect(getByText('Eiffel Tower Stadium')).not.toBeNull();
  });

  it('renders sports list in the stadium', () => {
    const { getByText } = render((
      <StadiumsContainer />
    ));

    fireEvent.click(getByText('Porte de la Chapelle Arena'));

    expect(getByText('배드민턴')).not.toBeNull();
    expect(getByText('리듬 체조')).not.toBeNull();
    expect(getByText('비치 발리볼')).not.toBeNull();
  });
});
