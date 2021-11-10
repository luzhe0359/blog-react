import React from 'react'
import { Spin } from 'antd';
import { LoadingWrap } from './style'

export default function AppLoading () {
    return (
        <LoadingWrap>
            <Spin size="large" />
        </LoadingWrap>
    )
}
