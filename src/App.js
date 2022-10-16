import { useState } from 'react';
import { EndMenu, StartMenu, TrainingScene } from './components';
import { MainLayout } from './layouts/MainLayout';
import './index.css';

export default function App() {
  const [mode, setMode] = useState('start');
  return (
    <MainLayout>
      {mode === 'start' && (
        <StartMenu
          onStart={() => {
            setMode('training');
          }}
        />
      )}
      {mode === 'training' && <TrainingScene />}
      {mode === 'end' && <EndMenu />}
    </MainLayout>
  );
}
