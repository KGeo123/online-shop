import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  prompt: string;
  linkText: string;
  href: string;
}

const PromptLink: React.FC<Props> = ({ linkText, prompt, href }) => {
  return (
    <p className="mx-auto mt-4 font-semibold">
      {prompt}
      <Link className="text-blue-600 ml-1 font-semibold underline" to={href}>
        {linkText}
      </Link>
    </p>
  );
};

export default React.memo(PromptLink);
