import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [btnColor, setBtnColor] = useState('green')
  const newBtnColor = btnColor === 'green' ? 'blue' : 'green' 
  const [inputDisabled, setInputDisabled] = useState(false)
  console.log('inputDisabled:', inputDisabled)

  return (
    <div className="App">
      <h1>Testing Playground</h1>
      <button 
        style={{backgroundColor: btnColor}}
        onClick={() => setBtnColor(newBtnColor)}
        disabled={inputDisabled}
      >
          Change button color to {newBtnColor}
      </button>

      <input 
        type = 'checkbox'
        defaultChecked={inputDisabled}
        onChange={(event) => setInputDisabled(event.target.checked)}
      />

    </div>
  )
}

export default App;
