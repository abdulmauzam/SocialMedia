
import React, { useState } from "react";
import uuid from "react-uuid";
import "./apps.css";
import Sidebar from "./SidebarPost";
import Typebar from "./TypebarPost";
import tanjiro from "../images/tanjiro.jpg";

export default function MainPost() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const addNote = () => {
    const newDraft = {
      id: uuid(),
      body: "",
      date:"",
      time:"",
     image: tanjiro,
    };
    setNotes([newDraft, ...notes]);
  };
  const onDeleteDraft = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        addNote={addNote}
        onDeleteDraft={onDeleteDraft}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      >
        {" "}
      </Sidebar>
      <Typebar
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      ></Typebar>
    </div>
  );
}
