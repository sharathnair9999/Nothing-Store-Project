import React from 'react'
import { userDetails } from '../index/index'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Wishlist = () => {
  const {userState} = userDetails();
  const {encodedToken} = userState;
  const navigate = useNavigate()
  useEffect(() => {
    !encodedToken && navigate("/login")
  }, [])
  
  return (
    <div>
      <h3>
      Wishlist</h3></div>
  )
}

export default Wishlist