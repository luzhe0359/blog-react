import React, { memo, useState, useEffect } from 'react'
import { List, Card, Avatar, Typography } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { LinkMainWrap } from './style'
// api
import { findLinkList } from '@api/link'

const { Paragraph, Link } = Typography;
const { Meta } = Card

const LinkMain = () => {
    const [linkList, setLinkList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        initData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const initData = () => {
        findLinkList({ pageSize: 0 }).then(res => {
            setLoading(false)
            setLinkList(res.data)
        }).catch(() => setLoading(false))
    }

    return (
        <LinkMainWrap>
            <QueueAnim type="bottom" duration={1000} >
                <div className="main-module" key={1}>
                    <Card className="main-card">
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 3,
                                lg: 4,
                                xl: 4,
                                xxl: 4,
                            }}
                            loading={loading}
                            dataSource={linkList}
                            renderItem={item => (
                                <List.Item>
                                    <Card>
                                        <Link href={item.url} target="_blank">
                                            <Meta
                                                avatar={
                                                    <Avatar size={80} src={item.logo} />
                                                }
                                                title={item.title}
                                                description={<Paragraph ellipsis={{ rows: 2, tooltip: item.desc }}>   {item.desc} </Paragraph>}
                                            />
                                        </Link>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Card>
                </div>
            </QueueAnim >
        </LinkMainWrap>
    )
}

export default memo(LinkMain)
