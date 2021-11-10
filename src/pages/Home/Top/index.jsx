import React, { memo } from 'react'
import QueueAnim from 'rc-queue-anim';
import { Avatar, Tooltip, Typography } from 'antd';
import { GithubOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';
import IconFont from '@/components/IconFont';
import { HomeTopWrap } from './style'

const { Link } = Typography;


const HomeTop = () => {
    return (
        <HomeTopWrap>
            <QueueAnim type="top" duration={1000}>
                <div key={1} className="slogan">  要逼自己优秀 , 然后骄傲的活着 。</div>
            </QueueAnim>
            <QueueAnim className="tag-box" type="bottom" animConfig={{ translateY: [0, 200] }} duration={1000} >
                <Tooltip key={1} placement="bottom" title="github: https://github.com/luzhe0359">
                    <Link href="https://github.com/luzhe0359" target="_blank" style={{ display: "inline-block" }}>
                        <Avatar size="large" icon={<GithubOutlined />} />
                    </Link>
                </Tooltip>
                <Tooltip key={2} placement="bottom" title="csdn: https://blog.csdn.net/weixin_44388523">
                    <Link href="https://blog.csdn.net/weixin_44388523" target="_blank" style={{ display: "inline-block" }}>
                        <Avatar size="large" icon={<IconFont type="icon-csdn" />} />
                    </Link>
                </Tooltip>
                <Tooltip key={3} placement="bottom" title="网易邮箱: luzhe0359@163.com">
                    <Avatar size="large" icon={<IconFont type="icon-wangyihao" />} />
                </Tooltip>
                <Tooltip key={4} placement="bottom" title="QQ: 1141178844">
                    <Avatar size="large" icon={<QqOutlined />} />
                </Tooltip>
                <Tooltip key={5} placement="bottom" title="Wechat: Mimanchi-zt">
                    <Avatar size="large" icon={<WechatOutlined />} />
                </Tooltip>
            </QueueAnim>
        </HomeTopWrap>
    )
}

export default memo(HomeTop)
