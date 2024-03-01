import { Fragment } from "react";
import "./SideBar.css";

const SideBar = ({ notes }) => {
  return (
    <aside>
      <section className="sidebar">
        <h1>Notes</h1>
      </section>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <button>{note.title}</button>
          </li>
        ))}
      </ul>
      );
    </aside>
  );
};

export default SideBar;
