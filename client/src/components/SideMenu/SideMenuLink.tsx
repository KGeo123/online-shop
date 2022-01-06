import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const SideMenuLink = styled(motion(Link)).attrs({
  animate: 'visible',
  initial: 'hidden',
  variants,
})`
  ${tw`text-white font-semibold text-lg`}
`;

export default SideMenuLink;
