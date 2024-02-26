import Input from './Input'
import "./NewNote.css";

const NewNote = () => {
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
          <button id="save-button">Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Note" textarea={true} />
      </div>
    </div>
  );
};

export default NewNote;
