import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/sign-up/SignUpPage';
import { Route, Routes } from 'react-router';
import Layout from './layouts/Layout/layout';

function App() {
  return (
    <Layout
      header={
        <div>
          <p>Hello world my friend</p>
        </div>
      }
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
