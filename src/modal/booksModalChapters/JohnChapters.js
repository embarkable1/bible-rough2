import React from 'react';
import './Chapters.css';
import { Link, NavLink } from 'react-router-dom';

const johnChapters = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
];

const JohnChapters = ({ passStateUp }) => {
  const showModalHandler = () => {
    passStateUp(false);
  };

  return (
    <>
      {johnChapters.map((chapter) => (
        <NavLink
          to={`/john/${chapter}`}
          className="chapter-link"
          key={chapter}
          onClick={showModalHandler}
        >
          {chapter}
        </NavLink>
      ))}
    </>
  );
};

export default JohnChapters;
