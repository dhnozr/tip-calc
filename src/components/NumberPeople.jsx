import React from 'react';

const NumberPeople = ({ people, setPeople }) => {
  return (
    <div>
      <label htmlFor='people'>Number of People</label>
      <input
        name='people'
        id='people'
        type='number'
        className='h-7 border-2 bg-VeryLightGrayishCyan outline-LightGrayishCyan text-VeryDarkCyan'
        placeholder='How many people'
        value={people}
        onChange={e => setPeople(e.target.value)}
      />
    </div>
  );
};

export default NumberPeople;
