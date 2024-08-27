const ClearStorageButton = () => {
  const handleClearStorage = () => {
    localStorage.removeItem('memoAppNotes');
    window.location.reload();  
  };

  return (
    <div className='flex flex-col-reverse'>
        <button onClick={handleClearStorage} className="bg-red-500 text-white p-2 rounded">
            ローカルストレージを削除
        </button>
    </div>

  );
};

export default ClearStorageButton;
