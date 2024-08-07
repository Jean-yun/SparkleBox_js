import { useState } from 'react';


function App() {
  //Add Single compliment and List of compliments
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);

  return (
    <div className="App">
      <h1>Hi</h1>
      
      <div>
        <button>Family & Friends</button>
        <button>Lover</button>
        <button>Personal Growth</button>
        <button>Fun & Leisure</button>
        <button>Home Environment</button>
        <button>Health</button>
        <button>Finance</button>
        <button>Career</button>
      </div>
      
      <select>
        <option>Family & Friends</option>
        <option>Lover</option>
        <option>Personal Growth</option>
        <option>Fun & Leisure</option>
        <option>Home Environment</option>
        <option>Health</option>
        <option>Finance</option>
        <option>Career</option>
      </select>
      <input type="text"></input>
      <button>Submit</button>
    </div>
  );
}

export default App;
