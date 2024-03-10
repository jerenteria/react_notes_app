import "./SideBar.css";

const SideBar = ({ notes, onSelectNote, selectedNoteId }) => {
  return (
    <aside className="sidebar">
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <button onClick={() => onSelectNote(note.id)}>{note.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
