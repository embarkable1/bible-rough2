//Page Imports
import Luke1 from './Chapters/Luke1';
import Luke2 from './Chapters/Luke2';
import Luke3 from './Chapters/Luke3';
import Luke4 from './Chapters/Luke4';
import Luke5 from './Chapters/Luke5';
import Luke6 from './Chapters/Luke6';
import Luke7 from './Chapters/Luke7';
import Luke8 from './Chapters/Luke8';
import Luke9 from './Chapters/Luke9';
import Luke10 from './Chapters/Luke10';
import Luke11 from './Chapters/Luke11';
import Luke12 from './Chapters/Luke12';
import Luke13 from './Chapters/Luke13';
import Luke14 from './Chapters/Luke14';
import Luke15 from './Chapters/Luke15';
import Luke16 from './Chapters/Luke16';
import Luke17 from './Chapters/Luke17';
import Luke18 from './Chapters/Luke18';
import Luke19 from './Chapters/Luke19';
import Luke20 from './Chapters/Luke20';
import Luke21 from './Chapters/Luke21';
import Luke22 from './Chapters/Luke22';
import Luke23 from './Chapters/Luke23';
import Luke24 from './Chapters/Luke24';
//////////////////////////////////////////

// !!!!!!!! PAGE IMPORTS !!!!!
//////////////////////////////////////////
import { Switch, Route } from 'react-router-dom';
import './Luke.css';

const Luke = (props) => {
  return (
    <>
      <Switch>
        <Route path="/luke/1">
          <Luke1 />
        </Route>
        <Route path="/luke/2">
          <Luke2 />
        </Route>
        <Route path="/luke/3">
          <Luke3 />
        </Route>
        <Route path="/luke/4">
          <Luke4 />
        </Route>
        <Route path="/luke/5">
          <Luke5 />
        </Route>
        <Route path="/luke/6">
          <Luke6 />
        </Route>
        <Route path="/luke/7">
          <Luke7 />
        </Route>
        <Route path="/luke/8">
          <Luke8 />
        </Route>
        <Route path="/luke/9">
          <Luke9 />
        </Route>
        <Route path="/luke/10">
          <Luke10 />
        </Route>
        <Route path="/luke/11">
          <Luke11 />
        </Route>
        <Route path="/luke/12">
          <Luke12 />
        </Route>
        <Route path="/luke/13">
          <Luke13 />
        </Route>
        <Route path="/luke/14">
          <Luke14 />
        </Route>
        <Route path="/luke/15">
          <Luke15 />
        </Route>
        <Route path="/luke/16">
          <Luke16 />
        </Route>
        <Route path="/luke/17">
          <Luke17 />
        </Route>
        <Route path="/luke/18">
          <Luke18 />
        </Route>
        <Route path="/luke/19">
          <Luke19 />
        </Route>
        <Route path="/luke/20">
          <Luke20 />
        </Route>
        <Route path="/luke/21">
          <Luke21 />
        </Route>
        <Route path="/luke/22">
          <Luke22 />
        </Route>
        <Route path="/luke/23">
          <Luke23 />
        </Route>
        <Route path="/luke/24">
          <Luke24 />
        </Route>
      </Switch>
    </>
  );
};

export default Luke;
