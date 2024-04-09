import React from 'react';

const BillInput = ({ billInput, setBillInput }) => {
  return (
    <div className='flex flex-col max-w-52'>
      <label className='text-sm text-VeryDarkCyan' htmlFor='bill'>
        Bill
      </label>
      <input
        name='bill'
        id='bill'
        type='text'
        className='h-7 border-2 bg-VeryLightGrayishCyan outline-LightGrayishCyan text-VeryDarkCyan'
        placeholder='Enter bill $'
        value={billInput}
        onChange={e => setBillInput(e.target.value)}
      />
    </div>
  );
};

export default BillInput;
