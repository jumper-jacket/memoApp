import { useState } from 'react';
import { EditFormProps } from './Content';
import { Notes } from '../types/types';

const EditForm = ({ note, onSave, onCancel } : EditFormProps) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    const updatedNote = { ...note, title, content};
    onSave(updatedNote);
  };

  return (
    <div className="border p-4">
      <h2 className="text-xl mb-4">メモを編集</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => {setTitle(e.target.value); console.log(e.target.value); console.log(note)}}
        className="w-full mb-2 p-2 border"
        placeholder="タイトル"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border"
        rows={5}
        placeholder="内容"
      />
      <div className="mt-4">
        <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded mr-2">保存</button>
        <button onClick={onCancel} className="bg-gray-500 text-white p-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default EditForm;
