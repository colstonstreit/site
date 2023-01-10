import './main.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import TopNav from './TopNav';

export function Footer() {

}

export default function App() {
  return (
    <>
      {/* <TopNav/> */}
      <main>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
    </>
  );
}