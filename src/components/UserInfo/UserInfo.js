import React from 'react'
import { useParams } from 'react-router-dom'
import { userDetails } from '../../contexts/user-context'

const UserInfo = () => {
  const {userId} = useParams()
  const {initialState} = userDetails()
  return (
    <div>
      <h3>User info</h3>
      {initialState.id===userId && <p>Name : {initialState.userName}</p>}
    </div>
  )
}

export default UserInfo