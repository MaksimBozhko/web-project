import React from 'react'
import { BugButton } from '@/app/providers/ErrorBoundary'

const Profile = () => {
  return (
    <div style={{ overflow: 'scroll', height: '35px', width: '100%' }}>
      Profile
      <BugButton/>
    </div>
  )
}

export default Profile
