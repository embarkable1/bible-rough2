import React, { useState } from 'react';
import './Chapters.css';
import { NavLink } from 'react-router-dom';

const markChapters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const MarkChapters = ({ passStateUp }) => {
  const showModalHandler = () => {
    passStateUp(false);
  };

  return (
    <>
      {markChapters.map((chapter) => (
        <NavLink
          key={chapter}
          className="chapter-link"
          to={`/mark/${chapter}`}
          onClick={showModalHandler}
        >
          {chapter}
        </NavLink>
      ))}
    </>
  );
};

export default MarkChapters;
