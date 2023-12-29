import React from 'react'
import Header from './Header'
import 'animate.css';
export default function Home() {
    return (
        <div>

            <Header />
            <div className='con overflow-hidden' id='home'>
                <div className="main text-center">
                    <h2 className="animate__animated animate__fadeInDown">I'am Mitesh Akbari<br /> </h2>
                    <h1 className="typewriter">Full-stack Devloper</h1>

                </div>
            </div>
        </div>
    )
}
