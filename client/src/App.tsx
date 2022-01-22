import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/sign-up/SignUpPage';
import { Route, Routes, useLocation } from 'react-router';
import Layout from './layouts/Layout/layout';
import Header from './components/Header/header';
import { AnimatePresence } from 'framer-motion';
import  Index from './pages/index/IndexPage';

function App() {
  const location = useLocation();

  return (
    <Layout
      header={<Header />}
      main={
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </AnimatePresence>
      }
    />
  );
}

export default App;
