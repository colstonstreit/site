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
          <p style={{'text-align': 'center', 'margin': 0, 'padding-top': 50 }}>
            Please note that this is only a skeleton site - I intend to flesh it out soon. Thank you for your patience!
          </p>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
    </>
  );
}