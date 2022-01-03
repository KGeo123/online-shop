import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/sign-up/SignUpPage';
import { Route, Routes } from 'react-router';
import Layout from './layouts/Layout/layout';
import Header from './components/Header/header';

function App() {
  return (
    <Layout
      header={<Header />}
      main={
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      }
    />
  );
}

export default App;
