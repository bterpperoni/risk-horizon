import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SignInPage = () => {
  return (
    <div className='w-full p-2'>
      <SignIn />
    </div>
  );
};
export default SignInPage;