// import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';
import { GameProvider } from './context/gameContext';

const rootElement = document.getElementById('root') as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <GameProvider>
    <App />
  </GameProvider>
  // </StrictMode>
);
