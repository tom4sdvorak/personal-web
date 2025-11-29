/* eslint-disable react-hooks/refs */
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/Home'
import Header from './components/Header'
import ContactPage from './pages/Contact'
import ProjectsPage from './pages/ProjectsPage'
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './theme'
import CssBaseline from '@mui/material/CssBaseline';
import {useRef} from 'react';
import BackgroundDiver from './components/BackgroundDiver';
import { AnimatePresence, motion, type Variants } from 'framer-motion';

const MotionMain = motion.main;

const pageVariants: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? '100vh' : '-100vh',
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.5, 1] },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? '-100vh' : '100vh',
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.5, 1] },
  }),
};

const pagesWithDepths: Record<string, number> = {
  '/': 0,
  '/projects': 1,
  '/contact': 2,
  '*': 3,  // 404
};

function App() {
  const location = useLocation();
  const tracker = useRef({
    path: location.pathname,
    direction: 0,
  });
  /*const [direction, setDirection] = useState(0);
  const previousPage = useRef(location.pathname)*/

 
  if (tracker.current.path !== location.pathname) {
    tracker.current.direction = pagesWithDepths[location.pathname] - pagesWithDepths[tracker.current.path];
    tracker.current.path = location.pathname;
  }

  const direction = tracker.current.direction;

  /*useLayoutEffect(() => {
    const direction = pagesWithDepths[location.pathname] - pagesWithDepths[previousPage.current];
    setDirection(direction);
    previousPage.current = location.pathname;
    console.log("Direction: ", direction);
  }, [location.pathname]);*/

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BackgroundDiver />
      <Header /> {/* The static Menu/Navigation bar */}
      <div id="glow-cursor"></div>
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        {/*<main className='content-container'> */}
        <MotionMain 
        className='content-container'
        key={location.pathname}
        custom={direction}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </MotionMain>
        {/* </main> */}
      </AnimatePresence>
      {/* Optional: Footer component */}
    </ThemeProvider>
  );
}

export default App
