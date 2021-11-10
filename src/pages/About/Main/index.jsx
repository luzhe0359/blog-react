import React, { memo, useState, useEffect } from 'react'
import moment from 'moment'
import { Card, Typography, Row, Col, Timeline, Divider } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { Parallax } from 'rc-scroll-anim';
import { AboutMainWrap } from './style'
import { findTimelineList } from '@api/timeline'

const { Title, Link } = Typography;

const AboutMain = () => {
    const [timelineList, setTimelineList] = useState([])
    useEffect(() => {
        findTimelineList({ pageSize: 0 }).then(res => {
            setTimelineList(res.data)
        })
    }, [])

    return (
        <AboutMainWrap>
            <QueueAnim type="bottom" duration={1000} >
                <div className="main-module" key={1}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <Parallax
                                animation={{ x: -100, opacity: 0, playScale: [0.8, 1] }}
                                style={{ transform: 'translateX(0px)', margin: '10px auto', opacity: 1 }}
                                className="code-box-shape"
                            >
                                <Card className="card-shadow">
                                    <Title level={3}>关于本站</Title>
                                    <div>
                                        <p>本站
                                            <Link target="_blank" href="https://zugelu.com "> zugelu.com</Link>
                                            属于个人博客
                                        </p>
                                        <p>当然，有意向写文章的朋友可以联系我开通后台权限，在本站发表属于你自己的文章  </p>
                                        <p>搭建这个博客的主要目的是记录并分享一些实用的编码技巧、折腾经历、生活记录等</p>
                                        <p>特别感谢我的发小@萌，提供的UI支持，整个博客的设计风格均由她提供。她的
                                            <Link target="_blank" href="https://www.zcool.com.cn/work/ZNTEwMjc4OTI=.html"> 作品集</Link>
                                        </p>
                                    </div>
                                </Card>
                            </Parallax>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <Parallax
                                animation={{ x: 100, opacity: 0, playScale: [0.8, 1] }}
                                style={{ transform: 'translateX(0px)', margin: '10px auto', opacity: 1 }}
                                className="code-box-shape"
                            >
                                <Card className="card-shadow">
                                    <Title level={3}>关于我</Title>
                                    <div>
                                        <p>朋友们都叫我毛路 (别称)</p>
                                        <p>90后，一名前端开发者，现居北京  </p>
                                        <p>  喜欢折腾各种前端技术，但不精通，算是一个硬伤 </p>
                                        <p>  爱代码、爱电影、爱篮球、爱游戏 (前DNF爱好者，现主玩LOL） </p>
                                    </div>
                                </Card>
                            </Parallax>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                            <Parallax
                                animation={{ x: 100, opacity: 0, playScale: [0.8, 1] }}
                                style={{ transform: 'translateX(0px)', margin: '10px auto', opacity: 1 }}
                                className="code-box-shape"
                            >
                                <Card className="card-shadow">
                                    <Title level={3}>关于其他</Title>
                                    <div>
                                        <p>本站所使用的技术栈如下: </p>
                                        <p>前端： react Ant Design axios</p>
                                        <p>后端： node express mongodb redis</p>
                                        <p>其他： git pm2</p>
                                        <p>vue版本：<Link target="_blank" href="https://zugelu.com"> https://zugelu.com</Link></p>
                                        <p>react版本：<Link target="_blank" href="https://zugelu.com/react"> https://zugelu.com/react</Link></p>
                                    </div>
                                </Card>
                            </Parallax>
                        </Col>
                    </Row>
                    <Divider />
                    <Title level={3} style={{ textAlign: 'center', margin: '30px auto' }}>记录博客建站的点滴</Title>
                    <Timeline mode={"alternate"}>
                        {
                            timelineList.map(item => {
                                return (
                                    <Timeline.Item key={item._id} label={moment(item.createTime).format("YYYY-MM-DD")}>
                                        <h3>{item.title}</h3>
                                        {item.body}
                                    </Timeline.Item>
                                )
                            })
                        }

                    </Timeline>
                </div>
            </QueueAnim >
        </AboutMainWrap >
    )
}

export default memo(AboutMain)
