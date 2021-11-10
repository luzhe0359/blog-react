import React, { memo } from 'react'
import AboutTop from './Top'
import AboutMain from './Main'


const About = () => {
    return (
        <>
            <AboutTop />
            <AboutMain />
        </ >
    )
}

export default memo(About)
