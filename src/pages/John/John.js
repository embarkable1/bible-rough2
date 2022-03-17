import React, { useState, useEffect } from 'react';
import John1 from './Chapters/John1';
import John2 from './Chapters/John2';
import John3 from './Chapters/John3';
import John4 from './Chapters/John4';
import John5 from './Chapters/John5';
import John6 from './Chapters/John6';
import John7 from './Chapters/John7';
import John8 from './Chapters/John8';
import John9 from './Chapters/John9';
import John10 from './Chapters/John10';
import John11 from './Chapters/John11';
import John12 from './Chapters/John12';
import John13 from './Chapters/John13';
import John14 from './Chapters/John14';
import John15 from './Chapters/John15';
import John16 from './Chapters/John16';
import John17 from './Chapters/John17';
import John18 from './Chapters/John18';
import John19 from './Chapters/John19';
import John20 from './Chapters/John20';
import John21 from './Chapters/John21';
import { Route, Switch } from 'react-router-dom';
import './John.css';

const John = (props) => {
  return (
    <>
      <Switch>
        <Route path="/john/1">
          <John1 />
        </Route>
        <Route path="/john/2">
          <John2 />
        </Route>
        <Route path="/john/3">
          <John3 />
        </Route>
        <Route path="/john/4">
          <John4 />
        </Route>
        <Route path="/john/5">
          <John5 />
        </Route>
        <Route path="/john/6">
          <John6 />
        </Route>
        <Route path="/john/7">
          <John7 />
        </Route>
        <Route path="/john/8">
          <John8 />
        </Route>
        <Route path="/john/9">
          <John9 />
        </Route>
        <Route path="/john/10">
          <John10 />
        </Route>
        <Route path="/john/11">
          <John11 />
        </Route>
        <Route path="/john/12">
          <John12 />
        </Route>
        <Route path="/john/13">
          <John13 />
        </Route>
        <Route path="/john/14">
          <John14 />
        </Route>
        <Route path="/john/15">
          <John15 />
        </Route>
        <Route path="/john/16">
          <John16 />
        </Route>
        <Route path="/john/17">
          <John17 />
        </Route>
        <Route path="/john/18">
          <John18 />
        </Route>
        <Route path="/john/19">
          <John19 />
        </Route>
        <Route path="/john/20">
          <John20 />
        </Route>
        <Route path="/john/21">
          <John21 />
        </Route>
      </Switch>
    </>
  );
};

export default John;
