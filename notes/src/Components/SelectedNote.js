import "./SelectedNotes.css";

const SelectedNote = ({ note, onGoBack, onDelete }) => {
  return (
    <div className="selected-notes">
      <div>
        <h1 className="note-title">{note.title}</h1>
        <div className="note-discription">
          <p>{note.note}</p>
        </div>
        <button id="back-button" onClick={onGoBack}>Go Back</button>
        <button id="delete-button" onClick={onDelete}>Delete Note</button>
      </div>
    </div>
  );
};

export default SelectedNote;
