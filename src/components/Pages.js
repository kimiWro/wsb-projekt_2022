import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HotMemList from './HotMemList';
import RegularMemList from './RegularMemList';

const Pages = () => {
        return (
          <Routes>
            <Route path="/regular" exact element={<RegularMemList/>}/>
            <Route path="/" element={<HotMemList/>}/> 
          </Routes>
        );
      };

export default Pages;