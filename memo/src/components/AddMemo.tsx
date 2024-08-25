//後メモの追加処理に書き換える
import { useState } from 'react';
import { Notes } from '../types/types';

type AddMemoProps = {
  onAddNote: (addedNote: Notes) => void;
};

const AddMemoButton = ({ onAddNote }: AddMemoProps) => {

  const handleAddStorage = () => {
    const newMemo: Notes = {
      id: genrateID(),
      title: "新しいメモ",
      content: "",
    };
    onAddNote(newMemo);
  };

  function genrateID(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2,9)}`;
  }
  

  return (
    <div className='flex flex-col-reverse'>
        <button onClick={handleAddStorage} className="font-bold bg-green-500 text-white p-2 rounded">
          メモの追加
        </button>
    </div>

  );
};

export default AddMemoButton;
