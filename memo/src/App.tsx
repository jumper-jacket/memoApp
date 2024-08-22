import  { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import DeleteLocalStorage from './components/DeleteLocalStorage';
import { Notes } from './types/types';

const STORAGE_KEY = 'memoAppNotes';


const App = () => {
  const [notes, setNotes] = useState<Notes[]>([]);
  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem(STORAGE_KEY);
    if(savedNotes && savedNotes!=='[]'){
      console.log(true);
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    console.log("setItemFn", STORAGE_KEY, JSON.stringify(notes));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const handleSelectNote = (id: number) => {
    setSelectedNote(id);
  };

  const handleSaveNote = (updatedNote: Notes) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        updatedNote.id === note.id ? updatedNote : note )
    );
  };

  const selectedNoteContent = notes.find((note) => note.id === selectedNote);

  return (
    <div className="flex h-screen">
      <Sidebar notes={notes} onSelect={handleSelectNote} />
      <Content note={selectedNoteContent ? selectedNoteContent : {id: 0, title:"未選択", content:"ノートが選択されていません"}} onSave={handleSaveNote} />
      <DeleteLocalStorage />
    </div>
  );
};

export default App;
