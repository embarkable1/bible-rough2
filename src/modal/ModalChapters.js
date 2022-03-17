import React, { useState } from 'react';
import MatthewChapters from './booksModalChapters/MatthewChapters';
import MarkChapters from './booksModalChapters/MarkChapters';
import LukeChapters from './booksModalChapters/LukeChapters';
import JohnChapters from './booksModalChapters/JohnChapters';
import './ModalChapters.css';

const ModalChapters = ({ book, passStateUp }) => {
  const showModal = (value) => {
    passStateUp(value);
  };

  return (
    <div className="modal">
      <div className="chapters-container">
        {book === 'matthew' && <MatthewChapters passStateUp={showModal} />}
        {book === 'mark' && <MarkChapters passStateUp={showModal} />}
        {book === 'luke' && <LukeChapters passStateUp={showModal} />}
        {book === 'john' && <JohnChapters passStateUp={showModal} />}
      </div>
    </div>
  );
};

export default ModalChapters;
