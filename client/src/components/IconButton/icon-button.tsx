import React from 'react';
import { IconType } from 'react-icons';

interface Props {
  icon: React.ReactElement;
}

const IconButton: React.FC<Props> = ({ icon }) => {
  return (
    <button className="flex items-center justify-center" type="button">
      {icon}
    </button>
  );
};

export default IconButton;
