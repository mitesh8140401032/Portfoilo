import React from 'react'
import Skill from './Skill'
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import ContactUs from './ContactUs'
export default function MainLayout() {
    return (
        <div>
            {/* Home  */}
            < Home />
            {/* About  */}
            < About />
            {/* Skill  */}
            < Skill />
            {/* Project  */}
            < Project />
            {/** Contact US */}
            < ContactUs />

        </div>
    )
}
