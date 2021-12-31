import React from 'react';
import logo from './logo.svg';
import './App.css';
import tw from 'twin.macro';
import styled from 'styled-components';

const Button = styled.button`
  ${tw`bg-blue-800 rounded shadow-sm text-white px-4 py-2 m-8`};
  ${tw`hover:bg-blue-600 transition-colors duration-150`}

  & div {
    ${tw`h-80 w-64`};
  }
`;

const App: React.FC = () => {
  return <Button>hello there</Button>;
};

export default App;
