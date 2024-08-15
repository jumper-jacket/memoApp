import React, { useState } from 'react';

type EditFormProps = {
  note: { id: number; title: string; content: string };
  onSave: (id: number, updatedTitle: string, updatedContent: string) => void;
  onCancel: () => void;
};

const EditForm: React.FC<EditFormProps> = ({ note, onSave, onCancel }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    onSave(note.id, title, content);
  };

  return (
    <div className="border p-4">
      <h2 className="text-xl mb-4">メモを編集</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
