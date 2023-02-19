import RoundFive from './components/roundBgs/RoundFive';
import RoundFour from './components/roundBgs/RoundFour';
import RoundOne from './components/roundBgs/RoundOne';
import RoundTwo from './components/roundBgs/RoundTwo';
import RountThree from './components/roundBgs/RountThree';
import Home from './Home';
import './index.css';
function App() {
  return (
    <div className=' w-full h-screen font-bodyfont bg-black relative overflow-hidden'>

      <div className='max-w-screen-2xl h-full mx-auto flex justify-center items-center'>
        <Home />
      </div>

     {/*========== backgrounds========= */}
     
      <div className='w-full h-full absolute top-0 left-0 z-10'>
        <RoundOne />
        <RoundTwo />
        <RountThree />
        <RoundFour />
        <RoundFive />
      </div>

    </div>
  );
}

export default App;
