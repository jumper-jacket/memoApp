import { useState } from 'react';
import EditForm from './EditForm';
import { Notes } from '../types/types';
import DeleteMemo from './DeleteMemo';

export type ContentProps = {
  note: Notes;
  notes: Notes[];
  onSave: (updatedNote: Notes) => void;
  onSaveAll: (newNote: Notes[]) => void;
};

export type EditFormProps = {
  note: Notes;
  onSave: (updatedNote: Notes) => void;
  onCancel: () => void;
};


const Content = ({ note, notes, onSave, onSaveAll }: ContentProps ) => {
  const [isEditing, setIsEditing] = useState(false);

  if (!note) {
    return <div className="text-gray-500">メモを選択してください。</div>;
  }

  return (
    <div className="flex-1 p-4">
      {isEditing ? (
        <EditForm
          note={note}
          onSave={(updatedNotenote) => {
            onSave(updatedNotenote);
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
      <DeleteMemo note={note} notes={notes} onSaveAll={onSaveAll} />
    </div>
  );
};

export default Content;

