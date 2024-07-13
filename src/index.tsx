import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './Main/page';
import { SecondPage } from './Main/secondpage'; // Ensure this matches the actual file name
import { Tree } from './Main/tree'; // Ensure this matches the actual file name

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/tree" element={<Tree />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
