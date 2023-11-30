import React from 'react'
import{UserButton} from '@clerk/clerk-react'
const Profile = () => {
  return (
    <div>
      Hello
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Profile
