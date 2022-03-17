import React, { useState } from 'react';
import './Chapters.css';
import { NavLink } from 'react-router-dom';

const matthewChapters = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28,
];

const MatthewChapters = ({ passStateUp }) => {
  const showModalHandler = () => {
    passStateUp(false);
  };

  return (
    <>
      {matthewChapters.map((chapter) => (
        <NavLink
          key={chapter}
          className="chapter-link"
          to={`/matthew/${chapter}`}
          onClick={showModalHandler}
        >
          {chapter}
        </NavLink>
      ))}
    </>
  );
};

export default MatthewChapters;
