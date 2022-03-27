import React from 'react'
import { constants } from '../../index/index'
const Loader = () => {

  return (
    <div className="loader flex-and-center w-100">
    <img
      src={constants.loading_svg}
      alt="loading"
    />
  </div>
  )
}

export default Loader