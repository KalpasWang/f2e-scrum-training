import { useState } from 'react';
import { EndMenu, StartMenu, TrainingScene } from './components';
import { MainLayout } from './layouts/MainLayout';
import gameConfig from './shared/gameConfig.json';
import './index.css';

export default function App() {
  const [mode, setMode] = useState('start');
  return (
    <MainLayout>
      {mode === 'start' && (
        <StartMenu
          onStart={() => {
            console.log('start');
            setMode('training');
          }}
        />
      )}
      {mode === 'training' && <TrainingScene game={gameConfig} />}
      {mode === 'end' && <EndMenu />}
    </MainLayout>
  );
}
