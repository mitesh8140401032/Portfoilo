import React from 'react'
import decode from './Assets/Image/logo (2).png'
import computer from './Assets/Image/32318401_7922058.jpg'
import charity from './Assets/Image/Charity-light.9774ce1b4fa91e3757ac.png'
import { Link } from 'react-router-dom'

export default function Project() {

  return (
    <div className='con2'>

      <div className="main">
        <h4 className='text-center'>Projects</h4>
        <div className="row d-flex justify-content-center align-items-center m-0 p-0">
          <div className="col-lg-2" >
            <img src={decode} className='img-fluid' alt="" style={{ backgroundColor: "white" }} />
          </div>
          <div className="col-lg-2">
            <img src={computer} className='img-fluid' alt="" />
          </div>
          <div className="col-lg-2">
            <img src={charity} className='img-fluid' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
