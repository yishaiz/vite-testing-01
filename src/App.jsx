import './App.css';
import { useState } from 'react';

function App() {
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = useState('red');

  // const nextColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
    <button
      className={buttonColor}
      onClick={() =>
        setButtonColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
      }
      disabled={disabled}
    >
      Change to {buttonColor === 'red' ? 'blue' : 'red'}
    </button>
    <br />
    <input
      type="checkbox"
      id="disabe-button-checkbox"
      aria-checked={disabled}
      defaultChecked={false}
      onChange={(e) => setDisabled(e.target.checked)}
    />
      <label htmlFor="disabe-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
