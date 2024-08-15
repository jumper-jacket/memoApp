import React, { useState } from 'react';
import EditForm from './EditForm';

type ContentProps = {
  note: { id: number; title: string; content: string } | null;
  onSave: (id: number, updatedTitle: string, updatedContent: string) => void;
};

const Content: React.FC<ContentProps> = ({ note, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!note) {
    return <div className="text-gray-500">メモを選択してください。</div>;
  }

  return (
    <div className="flex-1 p-4">
      {isEditing ? (
        <EditForm
          note={note}
          onSave={(id, title, content) => {
            onSave(id, title, content);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <div className="border p-4">
          <h2 className="text-xl mb-4">{note.title}</h2>
          <p>{note.content}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            編集
          </button>
        </div>
      )}
    </div>
  );
};

export default Content;

