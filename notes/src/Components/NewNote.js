import { useRef } from 'react';
import Input from './Input'
import "./NewNote.css";

const NewNote = ({onAdd}) => {
  const title = useRef(); // cannot use ref with custom component only built in input need to use forward ref in Input.js
  const note = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value; // get entered value at 'title' label input
    const enteredNote = note.current.value; // get entered value at 'note' label input
    
    
    // validation
    // onAdd is an object that will be taken in by handleAddNote(noteData parameter) in App.js
    onAdd({
      title: enteredTitle,
      note: enteredNote
    })
  };




  return (
    <div className="new-note-section">
      <header>
        <h1>Create a new note</h1>
      </header>
      <menu className="buttons">
        <li>
          <button id="cancel-button">Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} id="save-button">Save</button>
        </li>
      </menu>
      <div>
        {/* able to use ref because we forwarded it from Input.js and imported useRef up top to be able to use it here */}
        <Input ref={title} label="Title" /> 
        <Input ref={note} label="Note" textarea={true} />
      </div>
    </div>
  );
};

export default NewNote;
