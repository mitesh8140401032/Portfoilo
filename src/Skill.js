import React, { useEffect } from 'react'
import html from './Assets/Image/html-5.png'
import css from './Assets/Image/css-3.png'
import javascript from './Assets/Image/js.png'
import react from './Assets/Image/structure.png'
import node from './Assets/Image/node-js.png'
import express from './Assets/Image/images-removebg-preview (1).png'
import mongodb from './Assets/Image/mongodb__1_-removebg-preview (2).png'
import firebase from './Assets/Image/1611674-removebg-preview.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skill() {
  useEffect(() => {
    AOS.init(); // Initialize AOS with desired options
  }, []);
  return (
    <div className='con3 overflow-hidden' id='skills'>
      <div className="main">
        <h4 className='text-center'>Skills</h4>
        <div className="container">
          <div className="row text-center">

            <div className="col-lg-3 mt-3" data-aos="fade-up"
              data-aos-duration="3000">

              <img src={html} alt="!.." /><br />
              HTML</div>
            <div className="col-lg-3 mt-3" data-aos="fade-up"
              data-aos-duration="3000">
              <img src={css} alt="!.." /><br />
              CSS</div>
            <div className="col-lg-3 mt-3" data-aos="fade-up"
              data-aos-duration="3000">
              <img src={javascript} alt="!.." /><br />
              JAVASCRIPT</div>
            <div className="col-lg-3 mt-3" data-aos="fade-up"
              data-aos-duration="3000">
              <img src={react} alt="!.." /><br />
              REACT</div>
            <div className="col-lg-3 mt-3" data-aos="fade-up"
              data-aos-duration="3000">
              <img src={node} alt="!.." /><br />
              NODE</div>
            <div className="col-lg-3 mt-3" data-aos="fade-up"
              data-aos-duration="3000">
              <img src={express} alt="!.." /><br />
              EXPRESS</div>
            <div className="col-lg-3 mt-3" data-aos="fade-up"
              data-aos-duration="3000">
              <img src={firebase} alt="!.." /><br />
              FIREBASE</div>
            <div className="col-lg-3 mt-3 " data-aos="fade-up"
              data-aos-duration="3000">
              <img src={mongodb} alt="!.." /><br />
              <span className='mt-2'>MONGODB</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
