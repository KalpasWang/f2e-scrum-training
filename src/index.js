// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { GameProvider } from './context/gameContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <GameProvider>
    <App />
  </GameProvider>
  // </StrictMode>
);
