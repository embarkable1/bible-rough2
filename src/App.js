import './App.css';
import React, { useState } from 'react';
import Matthew from './pages/Matthew/Matthew';
import Mark from './pages/Mark/Mark';
import Luke from './pages/Luke/Luke';
import John from './pages/John/John';
import ModalChapters from './modal/ModalChapters';

function App() {
  const [book, setBook] = useState('matthew');
  const [modal, setModal] = useState(false);

  const closeModal = (value) => {
    setModal(value);
  };

  const showModalMatt = (value) => {
    setModal(true);
    setBook('matthew');
  };
  const showModalMark = (value) => {
    setModal(true);
    setBook('mark');
  };
  const showModalLuke = (value) => {
    setModal(true);
    setBook('luke');
  };
  const showModalJohn = (value) => {
    setModal(true);
    setBook('john');
  };

  return (
    <>
      <button
        className={`${book === 'matthew' ? 'activate' : ''}`}
        onClick={showModalMatt}
      >
        Matthew
      </button>
      <button
        className={`${book === 'mark' ? 'activate' : ''}`}
        onClick={showModalMark}
      >
        Mark
      </button>
      <button
        className={`${book === 'luke' ? 'activate' : ''}`}
        onClick={showModalLuke}
      >
        Luke
      </button>
      <button
        className={`${book === 'john' ? 'activate' : ''}`}
        onClick={showModalJohn}
      >
        John
      </button>
      {book === 'matthew' && !modal && <Matthew />}
      {book === 'mark' && !modal && <Mark />}
      {book === 'luke' && !modal && <Luke />}
      {book === 'john' && !modal && <John />}
      {modal && <ModalChapters book={book} passStateUp={closeModal} />}
    </>
  );
}

export default App;
