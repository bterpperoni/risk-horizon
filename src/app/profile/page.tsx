import { UserProfile } from '@clerk/nextjs';
import React from 'react';

const ProfilePage = () => {
  return (
    <div className='w-full p-4 m-4 border-2 border-red-400'>
      <UserProfile />
    </div>
  );
};

export default ProfilePage;