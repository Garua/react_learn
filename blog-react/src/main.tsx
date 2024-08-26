import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App.tsx'
import {HashRouter} from "react-router-dom";



createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <HashRouter>
        <App />
    </HashRouter>
  // </StrictMode>,
)
