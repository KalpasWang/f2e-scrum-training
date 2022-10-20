import { useCallback } from 'react';
import { EndScene, StartScene, TrainingScene } from './components/Scenes';
import { MainLayout } from './components/layouts';
import './index.css';
import { useGameContext } from './context/gameContext';

export default function App() {
  const { state, dispatch } = useGameContext();
  const toNextStage = useCallback(() => {
    dispatch({ type: 'nextSatge' });
  }, [dispatch]);

  const Scenes = {
    start: StartScene,
    training: TrainingScene,
    end: EndScene,
  };
  const CurrentScene = Scenes[state.currentScene];

  return (
    <MainLayout>
      <CurrentScene onComplete={toNextStage} />
    </MainLayout>
  );
}
