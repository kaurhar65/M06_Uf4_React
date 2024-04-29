import { useState } from 'react'
import Button from './components/button';
import './app.css';

function App() {
  const [numClicks, setClicks] = useState(0);

  const incrementNum = () => {
    setClicks(numClicks + 1);
  };

  const reiniciarNum = () => {
    setClicks(0);
  };

  return (
    <>
      <div className='contenedorGeneral'>
        <div className='buttonDiv'>
          <Button esClick={true} onclick={incrementNum} text="Click"></Button>
          <Button
            esClick={false}
            onclick={reiniciarNum}
            text="Restart"
          ></Button>
        </div>
        <h1>{numClicks}</h1>
      </div>
    </>
  );
}

export default App
