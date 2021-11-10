import React, { memo } from 'react'
import HomeTop from './Top'
import HomeMain from './Main'

const Home = () => {
    return (
        <>
            <HomeTop />
            <HomeMain />
        </>
    )
}

export default memo(Home)
