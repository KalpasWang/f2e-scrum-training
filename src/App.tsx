import React, { useEffect } from 'react';
import useSound from 'use-sound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { StartScene, TrainingScene } from './components/Scenes';
import { MainLayout } from './components/layouts';
import './index.css';
import bgMusic from './assets/bgmusic.mp3';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartScene />,
  },
  {
    path: 'training',
    element: (
      <MainLayout>
        <TrainingScene />
      </MainLayout>
    ),
  },
]);

export default function App() {
  const [playMusic, { stop: stopMusic }] = useSound(bgMusic, {
    loop: true,
    volume: 0.5,
  });

  useEffect(() => {
    playMusic();

    return () => {
      stopMusic();
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />;
    </AnimatePresence>
  );
}
