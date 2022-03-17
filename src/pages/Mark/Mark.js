import React, { useState, useEffect } from 'react';
import Mark1 from './Chapters/Mark1';
import Mark2 from './Chapters/Mark2';
import Mark3 from './Chapters/Mark3';
import Mark4 from './Chapters/Mark4';
import Mark5 from './Chapters/Mark5';
import Mark6 from './Chapters/Mark6';
import Mark7 from './Chapters/Mark7';
import Mark8 from './Chapters/Mark8';
import Mark9 from './Chapters/Mark9';
import Mark10 from './Chapters/Mark10';
import Mark11 from './Chapters/Mark11';
import Mark12 from './Chapters/Mark12';
import Mark13 from './Chapters/Mark13';
import Mark14 from './Chapters/Mark14';
import Mark15 from './Chapters/Mark15';
import Mark16 from './Chapters/Mark16';

import { Switch, Route } from 'react-router-dom';
import './Mark.css';

const Mark = (props) => {
  return (
    <>
      <Switch>
        <Route path="/mark/1">
          <Mark1 />
        </Route>
        <Route path="/mark/2">
          <Mark2 />
        </Route>
        <Route path="/mark/3">
          <Mark3 />
        </Route>
        <Route path="/mark/4">
          <Mark4 />
        </Route>
        <Route path="/mark/5">
          <Mark5 />
        </Route>
        <Route path="/mark/6">
          <Mark6 />
        </Route>
        <Route path="/mark/7">
          <Mark7 />
        </Route>
        <Route path="/mark/8">
          <Mark8 />
        </Route>
        <Route path="/mark/9">
          <Mark9 />
        </Route>
        <Route path="/mark/10">
          <Mark10 />
        </Route>
        <Route path="/mark/11">
          <Mark11 />
        </Route>
        <Route path="/mark/12">
          <Mark12 />
        </Route>
        <Route path="/mark/13">
          <Mark13 />
        </Route>
        <Route path="/mark/14">
          <Mark14 />
        </Route>
        <Route path="/mark/15">
          <Mark15 />
        </Route>
        <Route path="/mark/16">
          <Mark16 />
        </Route>
      </Switch>
    </>
  );
};

export default Mark;
