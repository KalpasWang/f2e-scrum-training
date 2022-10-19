import { useCallback } from 'react';
import { EndScene, StartScene, TrainingScene } from './components/Scenes';
import { MainLayout } from './components/layouts';
import './index.css';
import { useGameContext } from './context/gameContext';

export default function App() {
  const { state, dispatch } = useGameContext();
  const toNext = useCallback(() => {
    dispatch({ type: 'nextSatge' });
  }, [dispatch]);

  const Scenes = {
    StartScene,
    TrainingScene,
    EndScene,
  };
  const CurrentScene = Scenes[state.currentScene];

  return (
    <MainLayout>
      <CurrentScene onComplete={toNext} />
      {/* {currentScene === 'start' && <StartScene onStart={onStart} />}
      {currentScene === 'training' && (
        <TrainingScene onGameComplete={onComplete} />
      )}
      {currentScene === 'end' && <EndScene onReset={onReset} />} */}
    </MainLayout>
  );
}
