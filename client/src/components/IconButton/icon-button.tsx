import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  icon: React.ReactElement;
}

const IconButtonWrapper = styled.button`
  ${tw`flex rounded-full p-1 items-center justify-center`};
  ${tw`transition-colors`}
`;

const IconButton: React.FC<Props> = ({ icon, onClick }) => {
  return (
    <IconButtonWrapper {...{ onClick }} type="button">
      {icon}
    </IconButtonWrapper>
  );
};

export default React.memo(IconButton);
