import React from 'react';
import { MdDehaze } from 'react-icons/md';
import IconButton from '../IconButton/icon-button';

export const Header = () => {
  return (
    // todo: create the aside component that opens once the icon button is clicked
    <div className="flex flex-row-reverse items-center h-full px-8">
      <IconButton icon={<MdDehaze color="white" size={34} />} />
    </div>
  );
};

export default Header;
