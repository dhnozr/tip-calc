import BillSplitter from './components/BillSplitter';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <div className='min-h-screen flex-col gap-10 bg-LightGrayishCyan flex items-center justify-center font-spaceMono'>
        <Logo />
        <BillSplitter />
      </div>
    </>
  );
}

export default App;
