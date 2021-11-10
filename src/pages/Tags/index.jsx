import React, { memo } from 'react'
import TagsTop from './Top'
import TagsMain from './Main'

const Tags = () => {
    return (
        <>
            <TagsTop />
            <TagsMain />
        </>
    )
}

export default memo(Tags)
