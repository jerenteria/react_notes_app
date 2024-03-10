import { useState } from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import NewNote from "./Components/NewNote";
import SelectedNote from "./Components/SelectedNote";

function App() {
  const [note, setNote] = useState({
    // null === no projected created / undefined === not adding project and no project selected
    selectedNoteId: undefined,
    notes: [], // create a state object and store all the notes in an array so we have access to all the notes
  }); 

  function handleDeleteNote() {
    setNote((prevState) => {
      return {
        ...prevState,
        selectedNoteId: undefined,
        notes: prevState.notes.filter(
          (note) => note.id !== prevState.selectedNoteId
        ),
      };
    });
  }

  const handleSelectNote = (id) => {
    setNote((prevState) => {
      return {
        ...prevState,
        selectedNoteId: id,
      };
    });
  };

  // create new note(takes in noteData)
  const handleAddNote = (noteData) => {
    //allows to create new note
    setNote((prevState) => {
      // get the previous state and return a new object(new note)
      const noteId = Math.random();
      const newNote = {
        ...noteData, // get the newNote data and spread(add) it to this new object
        id: noteId, // create a random id number by using Math.random()
      };
      // return all the notes
      return {
        ...prevState,
        selectedNoteId: undefined, // get the info from the previous state(all the old notes in the array that were created before this new note)
        notes: [...prevState.notes, newNote], // update the notes by adding all the old notes at the beginning then adding the new note that was just created at the end
      };
    });
  };

  console.log(note);

  function handleGoBack() {
    setNote((prevState) => {
      return {
        ...prevState,
        selectedNoteId: null,
      }
    });
  };

  // finds the note by id that way you are selecting and viewing the corrent note
  const selectedNote = note.notes.find(
    // takes in the notes arr and get the id of those notes and makes sure its the same as the note being selected
    (notes) => notes.id === note.selectedNoteId
  );

  let content = <SelectedNote note={selectedNote} onDelete={handleDeleteNote} onGoBack={handleGoBack} />;

  if (note.selectedNoteId === null) {
    content = <NewNote onAdd={handleAddNote} />;
  } else if (note.selectedNoteId === undefined) {
    content = <NewNote onAdd={handleAddNote} />;
  }

  return (
    <main className="main">
      <SideBar notes={note.notes} onSelectNote={handleSelectNote}/>
      {/* <NewNote onAdd={handleAddNote} /> */}
      {content}
    </main>
  );
}

export default App;
