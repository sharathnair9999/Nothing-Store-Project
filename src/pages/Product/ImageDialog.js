import React from 'react'
import "./Product.css"

const ImageDialog = ({setOpenDialog, img}) => {
  return (
    <div className='image-modal flex-and-center flex-col'>
      <div className='relative'>
      <img src={img} alt="test" />

      <i onClick={()=>setOpenDialog(false)} className="fa-solid close-modal fa-xmark fa-2xl"></i>
      </div>
    </div>
  )
}

export default ImageDialog