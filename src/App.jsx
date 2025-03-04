import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  // const nextColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        className={buttonColor}
        onClick={() =>
          setButtonColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
        }
      >
        Change to {buttonColor === 'red' ? 'blue' : 'red'}
      </button>
    </div>
  );
}

export default App;
