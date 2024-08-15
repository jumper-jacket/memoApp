import React from 'react';

type SidebarProps = {
  notes: { id: number; title: string }[];
  onSelect: (id: number) => void;
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
