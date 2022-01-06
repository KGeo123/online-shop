import React, { useEffect } from 'react';
import SideMenuWrapper from '../../layouts/SideMenuWrapper/side-menu-wrapper';
import IconButton from '../IconButton/icon-button';
import { MdClear } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SideMenuLink from './SideMenuLink';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  const { pathname } = useLocation();

  useEffect(() => onClose(), [pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <SideMenuWrapper>
          <SideMenuLink to="/login">Login</SideMenuLink>
          <SideMenuLink to="/sign-up">Sign Up</SideMenuLink>
          <SideMenuLink to="/">Home</SideMenuLink>
          <IconButton
            onClick={onClose}
            icon={
              <MdClear
                color="white"
                size={32}
                className="absolute top-8 right-8"
              />
            }
          />
        </SideMenuWrapper>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
