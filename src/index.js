import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router-dom";

//Importing all the pages
import HeroPage from './HeroPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HeroPage />
  </>
);

