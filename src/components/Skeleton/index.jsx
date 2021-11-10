import React from 'react'
import { Skeleton, Space } from 'antd';
import { SkeletonWrap } from './style'
const { Input } = Skeleton

export default function AppSkeleton () {
    return (
        <SkeletonWrap>
            <Space size="large" className="ske-top">
                <Input style={{ width: 200 }} active size="large" />
                <Input style={{ width: 200 }} active size="large" />
            </Space>
            <div className="main-bot">
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
            </div>
        </SkeletonWrap>
    )
}
