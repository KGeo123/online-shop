import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

const SideMenuWrapper: React.FC = ({ children }) => {
  return ReactDOM.createPortal(
    <motion.aside
      className="bg-purple-600 justify-between py-72
                 flex flex-col items-center fixed top-0 right-0 h-screen w-screen
                 sm:w-1/3 md:w-1/4 lg:w-1/5 shadow-sm opacity-100
                 "
      initial={{ x: '100%' }}
      animate={{
        x: 0,
        transition: {
          type: 'tween',
          when: 'beforeChildren',
        },
      }}
      transition={{ type: 'tween', staggerChildren: 1 }}
      exit={{ x: '100%', transition: { type: 'tween' } }}
      key="side-menu"
    >
      {children}
    </motion.aside>,
    document.getElementById('overlay') as HTMLDivElement,
  );
};

export default SideMenuWrapper;
