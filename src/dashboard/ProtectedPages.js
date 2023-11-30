import React from 'react'
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
  } from "@clerk/clerk-react";
import Profile from './profile';
  
const Dashboard = () => {
  return (
    <div>
          <SignedIn>
        <Profile />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
  
    </div>
  )
}

export default Dashboard
