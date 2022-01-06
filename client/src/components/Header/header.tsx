import React, { useCallback, useState } from 'react';
import { MdDehaze } from 'react-icons/md';
import IconButton from '../IconButton/icon-button';
import HeaderWrapper from '../../layouts/HeaderWrapper/header-wrapper';
import Logo from '../Logo/logo';
import SideMenu from '../SideMenu/side-menu';

export const Header = () => {
  const [shouldShowSideMenu, setShouldShowSideMenu] = useState(false);

  const handleButtonClick = useCallback(
    () => setShouldShowSideMenu(true),
    [setShouldShowSideMenu],
  );

  const handleSideMenuClose = useCallback(
    () => setShouldShowSideMenu(false),
    [setShouldShowSideMenu],
  );

  return (
    <HeaderWrapper>
      <Logo />
      <IconButton
        onClick={handleButtonClick}
        icon={<MdDehaze color="white" size={34} />}
      />
      <SideMenu onClose={handleSideMenuClose} isOpen={shouldShowSideMenu} />
    </HeaderWrapper>
  );
};

export default React.memo(Header);
