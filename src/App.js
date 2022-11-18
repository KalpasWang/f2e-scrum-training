import { useCallback } from 'react';
import { TrainingScene } from './components/Scenes';
import { MainLayout } from './components/layouts';
import './index.css';
import { useGameContext } from './context/gameContext';

export default function App() {
  const { dispatch } = useGameContext();
  const toNextStage = useCallback(() => {
    dispatch({ type: 'nextSatge' });
  }, [dispatch]);

  return (
    <MainLayout>
      <TrainingScene onComplete={toNextStage} />
    </MainLayout>
  );
}
