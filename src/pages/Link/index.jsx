import React, { memo } from 'react'
import LinkTop from './Top'
import LinkMain from './Main'


const Link = () => {
    return (
        <>
            <LinkTop />
            <LinkMain />
        </>
    )
}

export default memo(Link)
