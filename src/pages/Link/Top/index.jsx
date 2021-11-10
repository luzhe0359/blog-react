import React, { memo } from 'react'
import QueueAnim from 'rc-queue-anim';
import { Typography, message } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { LinkTopWrap } from './style'

const { Paragraph } = Typography;

const LinkTop = props => {
    const copyEamil = () => {
        message.success('已复制博主邮箱');
    }

    return (
        <LinkTopWrap>
            <QueueAnim type="top" duration={1000}>
                <div key={1} className="slogan">  如果可以 , 带着你的 <LinkOutlined style={{ color: `#1890ff` }} />, 我们把酒言欢。</div>
                <div key={2} className="sub-slogan">  如您添加了小站链接，请邮件告知  <Paragraph copyable={{ tooltips: false, onCopy: copyEamil }}>luzhe0359@163.com</Paragraph></div>
            </QueueAnim>
        </LinkTopWrap>
    )
}

export default memo(LinkTop)
