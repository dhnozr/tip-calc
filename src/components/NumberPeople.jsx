import React from 'react';

const NumberPeople = ({ people, setPeople }) => {
  return (
    <div>
      <label className='text-DarkGrayishCyan' htmlFor='people'>
        Number of People
      </label>
      <input
        name='people'
        id='people'
        type='number'
        className='h-10 p-1 border-2 w-full bg-VeryLightGrayishCyan outline-LightGrayishCyan text-VeryDarkCyan'
        placeholder='How many people'
        value={people}
        onChange={e => setPeople(e.target.value)}
      />
    </div>
  );
};

export default NumberPeople;
