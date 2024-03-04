import { useRef } from "react";
import Input from "./Input";
import "./NewNote.css";
import Modal from "./Modal";

const NewNote = ({ onAdd }) => {
  const modal = useRef();


  const title = useRef(); // cannot use ref with custom component only built in input need to use forward ref in Input.js
  const note = useRef();

  const handleSave = () => {
    // get current title and value of entered value by user
    const enteredTitle = title.current.value; // get entered value at 'title' label input
    const enteredNote = note.current.value; // get entered value at 'note' label input

    // validation
    if (enteredTitle.trim() === "" || enteredNote === "") {
      // show modal
      modal.current.open();
      return;
    }

    // onAdd is an object that will be taken in by handleAddNote(noteData parameter) in App.js
    onAdd({
      title: enteredTitle,
      note: enteredNote,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption='Okie-dokie'>
        <h2>Invalid Input</h2>
      </Modal>
        <div className="new-note-section">
          <header>
            <h1>Create a new note</h1>
          </header>
          <menu className="buttons">
            <li>
              <button id="cancel-button">Cancel</button>
            </li>
            <li>
              <button onClick={handleSave} id="save-button">
                Save
              </button>
            </li>
          </menu>
          <div>
            {/* able to use ref because we forwarded it from Input.js and imported useRef up top to be able to use it here */}
            <Input ref={title} label="Title" />
            <Input ref={note} label="Note" textarea={true} />
          </div>
        </div>
    </>
  );
};

export default NewNote;
