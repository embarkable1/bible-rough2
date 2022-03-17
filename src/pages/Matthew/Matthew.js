import React, { useState, useEffect } from 'react';
import Matthew1 from './Chapters/Matthew1';
import Matthew2 from './Chapters/Matthew2';
import Matthew3 from './Chapters/Matthew3';
import Matthew4 from './Chapters/Matthew4';
import Matthew5 from './Chapters/Matthew5';
import Matthew6 from './Chapters/Matthew6';
import Matthew7 from './Chapters/Matthew7';
import Matthew8 from './Chapters/Matthew8';
import Matthew9 from './Chapters/Matthew9';
import Matthew10 from './Chapters/Matthew10';
import Matthew11 from './Chapters/Matthew11';
import Matthew12 from './Chapters/Matthew12';
import Matthew13 from './Chapters/Matthew13';
import Matthew14 from './Chapters/Matthew14';
import Matthew15 from './Chapters/Matthew15';
import Matthew16 from './Chapters/Matthew16';
import Matthew17 from './Chapters/Matthew17';
import Matthew18 from './Chapters/Matthew18';
import Matthew19 from './Chapters/Matthew19';
import Matthew20 from './Chapters/Matthew20';
import Matthew21 from './Chapters/Matthew21';
import Matthew22 from './Chapters/Matthew22';
import Matthew23 from './Chapters/Matthew23';
import Matthew24 from './Chapters/Matthew24';
import Matthew25 from './Chapters/Matthew25';
import Matthew26 from './Chapters/Matthew26';
import Matthew27 from './Chapters/Matthew27';
import Matthew28 from './Chapters/Matthew28';

import { Route, Switch } from 'react-router-dom';
import './Matthew.css';

const Matthew = (props) => {
  // get the chapter number from the route

  // increment it by 1 (we'll deal with min / max later)
  // navigate to that route
  return (
    <>
      <Switch>
        <Route path="/matthew/1">
          <Matthew1 />
        </Route>
        <Route path="/matthew/2">
          <Matthew2 />
        </Route>
        <Route path="/matthew/3">
          <Matthew3 />
        </Route>
        <Route path="/matthew/4">
          <Matthew4 />
        </Route>
        <Route path="/matthew/5">
          <Matthew5 />
        </Route>
        <Route path="/matthew/6">
          <Matthew6 />
        </Route>
        <Route path="/matthew/7">
          <Matthew7 />
        </Route>
        <Route path="/matthew/8">
          <Matthew8 />
        </Route>
        <Route path="/matthew/9">
          <Matthew9 />
        </Route>
        <Route path="/matthew/10">
          <Matthew10 />
        </Route>
        <Route path="/matthew/11">
          <Matthew11 />
        </Route>
        <Route path="/matthew/12">
          <Matthew12 />
        </Route>
        <Route path="/matthew/13">
          <Matthew13 />
        </Route>
        <Route path="/matthew/14">
          <Matthew14 />
        </Route>
        <Route path="/matthew/15">
          <Matthew15 />
        </Route>
        <Route path="/matthew/16">
          <Matthew16 />
        </Route>
        <Route path="/matthew/17">
          <Matthew17 />
        </Route>
        <Route path="/matthew/18">
          <Matthew18 />
        </Route>
        <Route path="/matthew/19">
          <Matthew19 />
        </Route>
        <Route path="/matthew/20">
          <Matthew20 />
        </Route>
        <Route path="/matthew/21">
          <Matthew21 />
        </Route>
        <Route path="/matthew/22">
          <Matthew22 />
        </Route>
        <Route path="/matthew/23">
          <Matthew23 />
        </Route>
        <Route path="/matthew/24">
          <Matthew24 />
        </Route>
        <Route path="/matthew/25">
          <Matthew25 />
        </Route>
        <Route path="/matthew/26">
          <Matthew26 />
        </Route>
        <Route path="/matthew/27">
          <Matthew27 />
        </Route>
        <Route path="/matthew/28">
          <Matthew28 />
        </Route>
      </Switch>
    </>
  );
};

export default Matthew;
