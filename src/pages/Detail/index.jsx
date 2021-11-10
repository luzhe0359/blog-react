import React, { memo, useState, useEffect } from 'react'
import DetailTop from './Top'
import DetailMain from './Main'
import { findArticleById } from '@api/article'


const Link = props => {
    const [detail, setDetail] = useState({})
    const { _id } = props.match.params

    useEffect(() => {
        findArticleById(_id).then(res => {
            setDetail({ ...res.data })
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <DetailTop {...detail} />
            <DetailMain {...detail} />
        </>
    )
}

export default memo(Link)
