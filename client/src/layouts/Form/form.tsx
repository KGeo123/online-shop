import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

interface ComponentArgs {
  animate: boolean;
}

const Form = styled(motion.form).attrs(({ animate = true }: ComponentArgs) => ({
  ...(animate
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2, delay: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.2, delay: 0.2 } },
      }
    : null),
}))`
  ${tw`bg-gray-200 py-4 px-4 max-w-sm w-5/6 rounded-lg shadow-md`}
  ${tw`mx-auto`}
  ${tw`flex flex-col`}
`;

export default Form;
