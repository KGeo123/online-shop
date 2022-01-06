import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';
import tw from 'twin.macro';

const variants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: -5,
  },
  exitAnimation: {
    opacity: 0,
  },
};

const ErrorMessage = styled(motion.p).attrs({
  variants,
  animate: 'visible',
  initial: 'hidden',
  exit: 'exitAnimation',
})`
  ${tw`text-red-500 mt-2`}
`;

export default ErrorMessage;
