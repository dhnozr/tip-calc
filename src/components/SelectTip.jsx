import React from 'react';

const SelectTip = ({ setPercentage }) => {
  const handleSelectTip = e => {
    setPercentage(Number(e.target.value));
  };
  return (
    <div className='grid gap-2'>
      <h2 className='text-DarkGrayishCyan'>Select Tip %</h2>
      <div className='grid grid-cols-3 gap-4 max-w-96'>
        <button onClick={handleSelectTip} value={5} className='bg-VeryDarkCyan text-white hover:bg-primary'>
          5%
        </button>
        <button onClick={handleSelectTip} value={10} className='bg-VeryDarkCyan text-white hover:bg-primary'>
          10%
        </button>
        <button onClick={handleSelectTip} value={15} className='bg-VeryDarkCyan text-white hover:bg-primary'>
          15%
        </button>
        <button onClick={handleSelectTip} value={25} className='bg-VeryDarkCyan text-white hover:bg-primary'>
          25%
        </button>
        <button onClick={handleSelectTip} value={50} className='bg-VeryDarkCyan text-white hover:bg-primary'>
          50%
        </button>
        <button value={'custom'} className='bg-LightGrayishCyan text-white hover:bg-primary'>
          Custom
        </button>
      </div>
    </div>
  );
};

export default SelectTip;
