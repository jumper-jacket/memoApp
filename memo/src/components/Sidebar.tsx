import React from 'react';
//import { AddMemoButton } from './AddMemo';

type SidebarProps = {
  notes: { id: string; title: string }[];
  onSelect: (id: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ notes, onSelect }) => {
  return (
    <div className="w-1/4 bg-slate-900 text-white p-4">
      <h3 className="text-xl mb-4">メモ一覧</h3>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            className="cursor-pointer mb-2 p-2 hover:bg-gray-600 rounded"
            onClick={() => onSelect(note.id)}
          >
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
