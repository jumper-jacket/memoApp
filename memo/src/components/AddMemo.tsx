//後メモの追加処理に書き換える
import React from 'react';

const ClearStorageButton: React.FC = () => {
  const handleAddStorage = () => {
    localStorage.removeItem('memoAppNotes');
    window.location.reload();  
  };

  return (
    <div className='flex flex-col-reverse'>
        <button onClick={handleAddStorage} className="bg-red-500 text-white p-2 rounded">
            ローカルストレージを削除
        </button>
    </div>

  );
};

export default ClearStorageButton;
