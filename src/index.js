import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'

import { ScrollToTop } from "./components/allComponentsTogether"
// styles
// ========================
import "./styles/index.scss"
import { AppProvider } from './context/productContext';
// ========================

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);