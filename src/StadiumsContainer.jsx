import React from 'react';

export default function StadiumsContainer() {
  const stadiums = [
    { id: 1, name: 'Porte de la Chapelle Arena', sportsList: ['배드민턴', '리듬 체조'] },
    { id: 2, name: 'Grand Palais', sportsList: ['펜싱', '태권도'] },
    { id: 3, name: 'La Concorde', sportsList: ['BMX 프리스타일', '스케이트보드', '브레이킹 댄스', '3대3 농구'] },
    { id: 4, name: 'Eiffel Tower Stadium', sportsList: ['비치 발리볼'] },
  ];

  return (
    <div>
      <h3>경기장 목록</h3>
      <ul>
        {stadiums.map((stadium) => (
          <li key={stadium.id}>
            {stadium.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
