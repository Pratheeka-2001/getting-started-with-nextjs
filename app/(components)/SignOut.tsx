'use client';
import { signOut } from 'next-auth/react';

const SignOut = () => {
    const handleSignOut = async() => {
        const res = await signOut();
    }

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  )
}

export default SignOut