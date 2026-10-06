import { AnimatePresence, motion } from 'framer-motion';
import { useGarageStore } from './store/useGarageStore';
import { HomeScreen } from './components/ui/HomeScreen';
import { CarSelectScreen } from './components/ui/CarSelectScreen';
import { GarageScreen } from './components/ui/GarageScreen';
import { RevealScreen } from './components/ui/RevealScreen';
import { Toast } from './components/ui/Toast';

export default function App() {
  const screen = useGarageStore((s) => s.screen);

  return (
    <div className="h-full w-full relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, scale: 0.995 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.005 }}
          transition={{ duration: 0.35 }}
          className="h-full"
        >
          {screen === 'home' && <HomeScreen />}
          {screen === 'select' && <CarSelectScreen />}
          {screen === 'garage' && <GarageScreen />}
          {screen === 'reveal' && <RevealScreen />}
        </motion.div>
      </AnimatePresence>
      <Toast />
    </div>
  );
}
