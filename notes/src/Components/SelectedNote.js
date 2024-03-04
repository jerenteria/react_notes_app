const SelectedNote = ({ note }) => {
  return (
    <div>
      <header>
        <div>
          <h1>{note.title}</h1>
          <button>Delete</button>
        </div>
        <p>{note.note}</p>
      </header>
    </div>
  );
};

export default SelectedNote;
