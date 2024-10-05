import { SignUp } from '@clerk/nextjs';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className='w-full p-2'>
      <SignUp />
    </div>
  );
};
export default SignUpPage;