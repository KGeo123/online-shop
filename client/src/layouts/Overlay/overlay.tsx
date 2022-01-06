import React from 'react';
import ReactDOM from 'react-dom';

const Overlay: React.FC = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="fixed h-full w-full top-0 left-0 bg-black opacity-30">
      {children}
    </div>,
    document.getElementById('overlay') as HTMLDivElement,
  );
};

export default Overlay;
