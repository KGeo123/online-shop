import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Label = styled.label`
  ${tw`font-semibold mb-2 ml-2`}
`;

export default React.memo(Label);
