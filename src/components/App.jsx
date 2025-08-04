import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNote((prevNotes) => {
      [...prevNotes, newNte];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {notes.map((noteItem) => {
        return <Note title={noteTile.item} content={noteItem.content} />;
      })}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
