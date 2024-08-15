import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const App: React.FC = () => {
  const [notes] = useState([
    { id: 1, title: 'メモ 1', content: 'メモ 1 の内容' },
    { id: 2, title: 'メモ 2', content: 'メモ 2 の内容' },
    { id: 3, title: 'メモ 3', content: 'メモ 3 の内容' },
  ]);

  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  const handleSelectNote = (id: number) => {
    setSelectedNote(id);
  };

  const selectedNoteContent = notes.find((note) => note.id === selectedNote) || null;

  return (
    <div className="flex h-screen">
      <Sidebar notes={notes} onSelect={handleSelectNote} />
      <Content note={selectedNoteContent}  onSave={handleSelectNote} />
    </div>
  );
};

export default App;
