import React, { useState } from 'react';
import reactRouterDom from 'react-router-dom';
import './Chapters.css';
import { NavLink } from 'react-router-dom';

const lukeChapters = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

const LukeChapters = ({ passStateUp }) => {
  const showModalHandler = () => {
    passStateUp(false);
  };
  return (
    <>
      {lukeChapters.map((chapter) => (
        <NavLink
          key={chapter}
          className="chapter-link"
          to={`/luke/${chapter}`}
          onClick={showModalHandler}
        >
          {chapter}
        </NavLink>
      ))}
    </>
  );
};

export default LukeChapters;
