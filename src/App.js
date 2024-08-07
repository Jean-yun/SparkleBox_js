import { useState } from 'react';


function App() {
  //Add Single compliment and List of compliments
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);
  const [selectedSector, setSelectedSector] = useState("Family & Friends"); //default setting

  //Handle sector change
  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
  };
  
  //When changed input, the word changes
  const handleInputChange = (event) => {
    setWord(event.target.value)
  }
  
  
  //When submitted, add the compliment to the selected sector
  const handleSubmit = (event) => {
    event.preventDefault();
    //if the word is valid after removin spaces on each end 
    if (word.trim()) {
      //add the compliment to the end of the selected Sector list
      setWords((prevWords) => [...prevWords, { text: word, sector: selectedSector }]);
      //reset the input field
      setWord("")
    }
  };
  
  const submitCompliment = (event) => {
    setWord(event.target.value)
    console.log(event.target.value)
  };
    
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
      
      <form onSubmit={handleSubmit}>
      <select onChange={handleSectorChange} value={selectedSector}>
        <option>Family & Friends</option>
        <option>Lover</option>
        <option>Personal Growth</option>
        <option>Fun & Leisure</option>
        <option>Home Environment</option>
        <option>Health</option>
        <option>Finance</option>
        <option>Career</option>
        </select>

        <input
          type="text"
          placeholder="Write your today's compliment :) "
          value={word}
          onChange={handleInputChange}
        />
                
        <button type="submit">Submit</button>
      </form>
    </div>
    
      
  );
}

export default App;
