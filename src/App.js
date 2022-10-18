import { EndScene, StartScene, TrainingScene } from './components/Scenes';
import { MainLayout } from './components/layouts';
import './index.css';
import { useGameContext } from './context/gameContext';

export default function App() {
  const { currentScene, setCurrentScene } = useGameContext();

  const onStart = () => {
    setCurrentScene('training');
  };

  const onComplete = () => {
    setCurrentScene('end');
  };

  const onReset = () => {
    setCurrentScene('start');
  };

  return (
    <MainLayout>
      {currentScene === 'start' && <StartScene onStart={onStart} />}
      {currentScene === 'training' && (
        <TrainingScene onGameComplete={onComplete} />
      )}
      {currentScene === 'end' && <EndScene onReset={onReset} />}
    </MainLayout>
  );
}
