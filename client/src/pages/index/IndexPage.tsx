import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div className="flex flex-col h-full items-center">
      <p className="text-white font-bold text-3xl mb-10">Welcome to e shop</p>
      <p className="text-white font-bold text-3xl mb-10">Start by signing up</p>
      <Link
        to="/sign-up"
        className="bg-purple-500 w-24 px-4 py-2 text-white font-semibold flex justify-center
        shadow rounded-md"
      >
        Sign Up My friend
      </Link>
    </div>
  );
}

export default Index;
