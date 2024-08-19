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
    if (!savedNotes) {
      setNotes([
        { id: 1, title: 'メモ 1', content: 'これはメモ 1 の内容です。' },
        { id: 2, title: 'メモ 2', content: 'これはメモ 2 の内容です。' },
        { id: 3, title: 'メモ 3', content: 'これはメモ 3 の内容です。' },
      ]);
    }
  }, []);

  useEffect(() => {
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

  const selectedNoteContent = notes.find((note) => note.id === selectedNote) || null;

  return (
    <div className="flex h-screen">
      <Sidebar notes={notes} onSelect={handleSelectNote} />
      <Content note={selectedNoteContent} onSave={handleSaveNote} />
      <DeleteLocalStorage />
    </div>
  );
};

export default App;
