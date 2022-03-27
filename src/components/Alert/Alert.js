import React from 'react'
import "./Alert.css"
const Alert = ({type, message, close}) => {
  return (
    <div className={`alert alert-${type}`}>
    <p className="alert-message">{message}</p>
    <i className="far fa-times-circle alert-close fa-lg flex-and-center" onClick={close}></i>
  </div>
  )
}

export default Alert