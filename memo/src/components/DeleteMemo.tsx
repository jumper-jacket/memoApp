import { Notes } from '../types/types';

type DeleteMemoProps = {
    note: Notes;
    notes: Notes[];
    onSaveAll: (newNote: Notes[]) => void;
};

const DeleteMemo = ({ note, notes, onSaveAll }: DeleteMemoProps) => {
    const handleDelete = () => {
        const deletedNotes = notes.filter(memo => memo.id !== note.id);
        onSaveAll(deletedNotes);
    }

    return (<>
    <button onClick={handleDelete} className="font-bold text-white bg-red-500 rounded-md p-1">
       メモを削除 
    </button>
    </>);
}

export default  DeleteMemo;