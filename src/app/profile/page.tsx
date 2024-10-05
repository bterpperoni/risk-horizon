import { UserProfile } from '@clerk/nextjs';
import React from 'react';

const ProfilePage = () => {
  return (
    <div className='w-full p-2'>
      <UserProfile routing='hash' />
    </div>
  );
};

export default ProfilePage;