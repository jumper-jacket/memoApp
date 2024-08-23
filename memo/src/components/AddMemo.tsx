//後メモの追加処理に書き換える
import React from 'react';
import { Notes } from '../types/types';

const AddMemoButton = () => {
  const handleAddStorage = () => {

  };

  function genrateID(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2,9)}`;
  }
  

  const newMemo: Notes = {
    id: genrateID(),
    title: "新しいメモ",
    content: ""
  }

  return (
    <div className='flex flex-col-reverse'>
        <button onClick={handleAddStorage} className="bg-red-500 text-white p-2 rounded">
          メモの追加
        </button>
    </div>

  );
};

export default AddMemoButton;
