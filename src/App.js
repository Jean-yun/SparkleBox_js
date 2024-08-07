import { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  
  console.log(localStorage.getItem('words'));
  //Add Single compliment and List of compliments
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);
  const [selectedSector, setSelectedSector] = useState("Family & Friends"); //default setting
  const [displayedSector, setDisplayedSector] = useState("Family & Friends"); //default shown
  
  //localStorage does not work on developer mode!! 
  //Implement only once ; Load data from localStorage when the component mounts
  useEffect(() => {
    const savedWords = JSON.parse(localStorage.getItem('words')) || [];
    setWords(savedWords);
  }, []);
  
  //Save data to localStorage whenever words state changes
  useEffect(() => {
    localStorage.setItem('words', JSON.stringify(words));
  }, [words]);
  
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
    <div className={styles.app}>
      <h1 className={styles.title}>Sparkle Box</h1>
      <h2 className={styles.generalText}>Record your daily compliments ! </h2>
      
      <div className="btns">
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
                
        <button className={styles.submitbtn} type="submit">Submit</button>
      </form>
      
      {/* Display the compliments for the selected sector*/}
      <div>
        <h2 className={styles.generalText}>You're doing great with your {displayedSector} </h2>
        <div className={styles.cardContainer}>
          {/* filter compliments only of selected sector */}
          {words
            .filter(word => word.sector === displayedSector)
            .map((word, index) => (<div key={index} className={styles.card}> {word.text} </div>))
          } 
        </div>
      </div>
      
    </div>

  );
}

export default App;
