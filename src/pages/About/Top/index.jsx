import React, { memo } from 'react'
import { Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { GlobalOutlined } from '@ant-design/icons';
import { AboutTopWrap } from './style'

const { Link } = Typography;

const AboutTop = () => {
    return (
        <AboutTopWrap>
            <QueueAnim type="top" duration={1000}>
                <div key={1} className="slogan">  <GlobalOutlined spin style={{ color: `$color`, marginRight: '10px' }} />本站已运行 0年1月12天0时18分10秒</div>
                <div key={2} className="sub-slogan">
                    <Link target="_blank" href="https://zugelu.com "> zugelu.com</Link>
                </div>
            </QueueAnim>
        </AboutTopWrap>
    )
}

export default memo(AboutTop)
