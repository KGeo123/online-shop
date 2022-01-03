import React from 'react';

interface Props {
  header?: React.ReactNode;
  main: React.ReactNode;
  aside?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ header, main, aside }) => {
  return (
    <div className="bg-gray-700 h-screen w-screen flex  flex-col ">
      <header className="bg-purple-600 h-16">{header}</header>
      <main className="mt-8 overflow-y-auto">{main}</main>
    </div>
  );
};

export default Layout;
