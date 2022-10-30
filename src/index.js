// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DndProvider } from 'react-dnd-multi-backend';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';

import './index.css';
import App from './App';
import { GameProvider } from './context/gameContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <GameProvider>
    <DndProvider options={HTML5toTouch}>
      <App />
    </DndProvider>
  </GameProvider>
  // </StrictMode>
);
