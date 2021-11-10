import React from 'react'
import moment from 'moment'
import { Typography, Divider, Space } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { FooterWrap } from './style'
import { dateDiff } from '@/utils/date.js'

const { Link } = Typography;


const Footer = () => {
    const [runTime, setRunTime] = React.useState('0年0月0天0时0分0秒')

    React.useEffect(() => {
        setRunTime(dateDiff("2021-07-01 00:00:00", moment().format()))
        let timmer = setInterval(() => {
            setRunTime(dateDiff("2021-07-01 00:00:00", moment().format()))
        }, 1000)
        return () => {
            clearInterval(timmer)
        }
    }, [runTime])
    return (
        <FooterWrap>
            <Divider />
            <Space direction="vertical">
                <Link href="https://beian.miit.gov.cn/" target="_blank">晋ICP备2021010367号</Link>
                <div><SyncOutlined spin /> 本站已运行 {runTime}</div>
            </Space>
        </FooterWrap>
    )
}

export default Footer

