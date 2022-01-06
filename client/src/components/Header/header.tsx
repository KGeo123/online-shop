import React, { useCallback, useState } from 'react';
import { MdDehaze } from 'react-icons/md';
import IconButton from '../IconButton/icon-button';
import HeaderWrapper from '../../layouts/HeaderWrapper/header-wrapper';
import Logo from '../Logo/logo';

export const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleButtonClick = useCallback(
    () => setShowSideMenu(true),
    [setShowSideMenu],
  );

  return (
    <HeaderWrapper>
      <Logo />
      <IconButton
        onClick={handleButtonClick}
        icon={<MdDehaze color="white" size={34} />}
      />
    </HeaderWrapper>
  );
};

export default React.memo(Header);
