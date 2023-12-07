import React from 'react'
import computer from './Assets/Image/340147-PAM5AX-984-removebg-preview.png'
export default function About() {
  return (
    <div className="con2">
      <div className="main">
        <h4 className='text-center'>About</h4>
        <div className="container ">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-3">
              <img src={computer} className='img-fluid' alt="" />
            </div>
            <div className="col-lg-7">
              <h5>:)

              </h5>
              <h6 className='paragraph'>"As a full-stack developer, I specialize in both front-end and back-end technologies. With a strong foundation in languages like JavaScript and expertise in frameworks such as React.js and Node.js, I create seamless and responsive web applications. My skills also extend to database management, ensuring robust and efficient solutions for diverse projects."</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
