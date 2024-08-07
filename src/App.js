import { useState } from 'react';


function App() {
  //Add Single compliment and List of compliments
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);
  const [selectedSector, setSelectedSector] = useState("Family & Friends"); //default setting
  const [displayedSector, setDisplayedSector] = useState("Family & Friends"); //default shown
  
  
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
  
  //handle sector button clicked
  const handleSectorButtonClick = (sector) => {
    setDisplayedSector(sector)
  }
  
    
  return (
    <div className="App">
      <h1>Hi</h1>
      
      <div>
        <button onClick={() => handleSectorButtonClick("Family & Friends")}>Family & Friends</button>
        <button onClick={() => handleSectorButtonClick("Lover")}>Lover</button>
        <button onClick={() => handleSectorButtonClick("Personal Growth")}>Personal Growth</button>
        <button onClick={() => handleSectorButtonClick("Fun & Leisure")}>Fun & Leisure</button>
        <button onClick={() => handleSectorButtonClick("Home Environment")}>Home Environment</button>
        <button onClick={() => handleSectorButtonClick("Health")}>Health</button>
        <button onClick={() => handleSectorButtonClick("Finance")}>Finance</button>
        <button onClick={() => handleSectorButtonClick("Career")}>Career</button>
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
      
      {/* Display the compliments for the selected sector*/}
      <div>
        <h2>You're doing great with your {displayedSector} </h2>
        <ul>
          
          {/* filter compliments only of selected sector */}
          {words
            .filter(word => word.sector === displayedSector)
            .map((word, index) => (<li key={index}> {word.text} </li>))
          } 
        </ul>
      </div>
      
    </div>

  );
}

export default App;
