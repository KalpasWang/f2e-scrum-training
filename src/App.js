import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { StartScene, TrainingScene } from './components/Scenes';
import { MainLayout } from './components/layouts';
import './index.css';

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
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />;
    </AnimatePresence>
  );
}
