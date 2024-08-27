import { Notes } from '../types/types';

type DeleteMemoProps = {
    note: Notes
};

const DeleteMemo = ({ note }: DeleteMemoProps) => {
    const handleDelete = () => {
        //localStorage.removeItem(note.id);
        //1window.location.reload();  
    }

    return (<>
    <button onClick={handleDelete} className="font-bold text-white bg-red-500">
       メモを削除 
    </button>
    </>);
}

export default  DeleteMemo;