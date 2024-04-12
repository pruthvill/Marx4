import React, { useState, useRef, useEffect } from 'react';

interface Note {
  id: string;
  text: string;
  color: string;
  isPinned: boolean;
  isArchived: boolean;
  labels: string[];
}

interface NoteProps {
  onNoteIconClick: () => void;
}

const Note: React.FC<NoteProps> = ({ onNoteIconClick }) => {
  const [isNoteOpen, setIsNoteOpen] = useState<boolean>(false);
  const [note, setNote] = useState<string>('');
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>('#FFFFFF');
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const openNote = () => {
    setIsNoteOpen(true);
  };

  const closeNote = () => {
    setIsNoteOpen(false);
    setNote('');
    setSelectedColor('#FFFFFF');
  };

  const saveNote = () => {
    if (note.trim() !== '') {
      const newNote: Note = {
        id: crypto.randomUUID(),
        text: note,
        color: selectedColor,
        isPinned: false,
        isArchived: false,
        labels: [],
      };
      setNotes([newNote, ...notes]);
      closeNote();
    }
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (noteRef.current && !noteRef.current.contains(event.target as Node)) {
      saveNote();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={openNote}
      >
        Add Note
      </button>

      {isNoteOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-50">
          <div ref={noteRef} className="bg-white shadow-lg rounded p-4 w-full max-w-md">
            <textarea
              className="w-full h-32 border border-gray-300 rounded p-2 resize-none mb-4"
              placeholder="Write your note here..."
              value={note}
              onChange={handleNoteChange}
            ></textarea>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <label className="mr-2">Color:</label>
                <div className="flex">
                  {['#FFFFFF', '#FED7D7', '#FEEBC8', '#DBEAFE', '#BFDBFE', '#C4B5FD'].map((color) => (
                    <button
                      key={color}
                      className={`w-6 h-6 rounded-full border border-gray-300 ${
                        selectedColor === color ? 'border-black' : ''
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(color)}
                    ></button>
                  ))}
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={saveNote}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((noteItem) => (
          <div
            key={noteItem.id}
            className={`bg-white shadow-lg rounded p-4 ${
              noteItem.color === '#FFFFFF' ? 'border border-gray-300' : ''
            }`}
          >
            <p className="text-gray-800">{noteItem.text}</p>
            <div className="flex justify-between items-center mt-2">
              <div>
                {noteItem.labels.map((label, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full mr-1"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex">
                <button
                  className={`text-gray-600 hover:text-gray-800 mr-2 ${
                    noteItem.isPinned ? 'text-yellow-500' : ''
                  }`}
                  onClick={() => {
                    const updatedNotes = notes.map((n) =>
                      n.id === noteItem.id ? { ...n, isPinned: !n.isPinned } : n
                    );
                    setNotes(updatedNotes);
                  }}
                >
                  {noteItem.isPinned ? 'Unpin' : 'Pin'}
                </button>
                <button
                  className="text-gray-600 hover:text-gray-800"
                  onClick={() => {
                    const updatedNotes = notes.map((n) =>
                      n.id === noteItem.id ? { ...n, isArchived: !n.isArchived } : n
                    );
                    setNotes(updatedNotes);
                  }}
                >
                  {noteItem.isArchived ? 'Unarchive' : 'Archive'}
                </button>
                <button
                  className="text-red-600 hover:text-red-800 ml-2"
                  onClick={() => {
                    const updatedNotes = notes.filter((n) => n.id !== noteItem.id);
                    setNotes(updatedNotes);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Note;
