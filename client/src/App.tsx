import { Formik } from 'formik';
import React from 'react';
import Form from './layouts/Form/form';

function App() {
  return (
    <div className="bg-gray-700 h-screen w-screen">
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <input type="text" />
          <input type="text" />
        </Form>
      </Formik>
    </div>
  );
}

export default App;
