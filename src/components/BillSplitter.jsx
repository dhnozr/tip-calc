import React, { useState } from 'react';
import BillInput from './BillInput';
import SelectTip from './SelectTip';
import NumberPeople from './NumberPeople';
import Output from './Output';

const BillSplitter = () => {
  const [billInput, setBillInput] = useState('');
  const [percentage, setPercentage] = useState(null);
  const [people, setPeople] = useState(1);

  const tipAmount = Number(((billInput * (percentage / 100)) / people).toFixed(2));

  const totalPerPerson = Number((billInput / people + tipAmount).toFixed(2));

  return (
    <div className='max-w-2xl w-full bg-white min-h-96 p-4 grid grid-cols-2  gap-8 justify-items-center'>
      <div className='flex flex-col justify-between py-6'>
        <BillInput billInput={billInput} setBillInput={setBillInput} />
        <SelectTip setPercentage={setPercentage} />
        <NumberPeople people={people} setPeople={setPeople} />
      </div>
      <div className='w-full bg-VeryDarkCyan p-2 rounded-2xl'>
        <Output tipAmount={tipAmount} totalPerPerson={totalPerPerson} />
      </div>
    </div>
  );
};

export default BillSplitter;
