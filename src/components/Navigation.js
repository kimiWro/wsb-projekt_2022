import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <>
      <div className="Navigation">
        <div className='Logo'>
        <h1>ME<br/>MY</h1>
        </div>
        <ul className='MemList'>
          <li className='HotItems'><NavLink to = "/">hot</NavLink></li>
          <li className='RegularItems'><NavLink to ="/regular">regular</NavLink></li>
        </ul>
      </div>
      </>
    );
  }
}

  export default Navigation;