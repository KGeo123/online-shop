import { Formik } from 'formik';
import React from 'react';
import Form from './layouts/Form/form';
import Input from './components/Input/input';
import LoginPage from './pages/login/LoginPage';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="bg-gray-700 h-screen w-screen pt-24">
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
