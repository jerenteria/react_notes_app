import { useState } from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import NewNote from './Components/NewNote';

function App() {
  const [note, setNote] = useState({
    selectedNoteId: undefined,
    notes: [] // create a state object and store all the notes in an array so we have access to all the notes
  })  

  console.log(note);

  // create new note(takes in noteData)
  const handleAddNote = (noteData) => {
    //allows to create new note
    setNote(prevState => { // get the previous state and return a new object(new note) 
      const newNote = {
        ...noteData, // get the newNote data and spread(add) it to this new object
        id: Math.random() // create a random id number by using Math.random()
      }
      // return all the notes
      return {
        ...prevState, // get the info from the previous state(all the old notes in the array that were created before this new note)
        notes: [...prevState.notes, newNote ] // update the notes by adding all the old notes at the beginning then adding the new note that was just created at the end
      }
    })
  };

  return (
    <main className="main">
        <SideBar />
        <NewNote onAdd={handleAddNote} />
    </main>
  );
}

export default App;
