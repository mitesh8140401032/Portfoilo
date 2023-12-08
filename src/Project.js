import React, { useEffect } from 'react'
import decode from './Assets/Image/logo (2).png'
import computer from './Assets/Image/32318401_7922058.jpg'
import charity from './Assets/Image/Charity-light.9774ce1b4fa91e3757ac.png'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Project() {
  useEffect(() => {
    AOS.init(); // Initialize AOS with desired options
  }, []);
  return (
    <div className='con2 overflow-hidden' id='projects'>

      <div className="main">
        <h4 className='text-center'>Projects</h4>
        <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>

          <div className='backgorund' data-aos="flip-left" data-aos-duration="2000" style={{ padding: "50px" }}>
            <Link to={'https://decodesofttech.com/socialmedia/23000016'} target='_blank'>
              <img src={decode} height={80} alt="" style={{ objectFit: "cover" }} />
            </Link>

          </div>
          <div className='backgorund' data-aos="flip-right" data-aos-duration="2500">
            <Link to={'https://computer-demo.web.app/'} target='_blank'>

              <img src={computer} height={200} width={200} alt="" style={{ objectFit: "cover" }} />
            </Link>
          </div>
          <div className='backgorund' data-aos="flip-left" data-aos-duration="3000">
            <Link to={"https://charity-foundation.web.app/"} target='_blank'>

              <img src={charity} height={80} width={200} alt="" style={{ objectFit: "cover" }} />
            </Link>
          </div>


        </div>
      </div>
    </div>
  )
}
