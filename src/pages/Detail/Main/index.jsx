import React, { memo, useState } from 'react'
import QueueAnim from 'rc-queue-anim';
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import { Card, Space, Skeleton, Row, Col, Anchor } from 'antd';
import { AlignLeftOutlined } from '@ant-design/icons';
import { DetailMainWrap } from './style'

const { Link } = Anchor;

const DetailMain = props => {
    const [removeTransformClass, setClass] = useState(null);
    const [anchorList, setAnchorList] = useState([]);
    const { mdContent = '' } = props

    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
        tables: true,
    });

    const handleEnd = (e) => {
        setClass('remove-transform')
        const anchors = document.querySelectorAll('h2')
        let list = Array.from(anchors).map(anchor => {
            return anchor.id
        })
        setAnchorList(list)
    }

    return (
        <DetailMainWrap>
            <QueueAnim type="bottom" duration={1000} onEnd={handleEnd}>
                <div className={"main-module " + removeTransformClass} key={1}>
                    <Card className="main-card" >
                        <Row >
                            <Col xs={24} md={18} >
                                <div className="list-context" dangerouslySetInnerHTML={{ __html: marked(mdContent) }}></div>
                                <Skeleton loading={!mdContent} active />
                                <Skeleton loading={!mdContent} active />
                                <Skeleton loading={!mdContent} active />
                            </Col>
                            <Col xs={0} md={6} >
                                <div className="anchor-context">
                                    <Space className="anchor-title"><AlignLeftOutlined />文章目录</Space>
                                    <Anchor className="anchor-body">
                                        {
                                            anchorList.map(anchor => {
                                                return <Link key={anchor} href={'#' + anchor} title={anchor} />
                                            })
                                        }
                                    </Anchor>
                                    <Skeleton loading={anchorList.length <= 0} active />
                                </div>
                                {/* <div style={{ padding: '10px', boxSizing: 'border-box' }}>
                                    <Affix offsetTop={5}>
                                        <div>
                                            <div className="nav-title">文章目录</div>
                                            <MarkNav
                                                className="article-menu"
                                                source={mdContent}
                                                ordered={false}
                                            />
                                        </div>
                                    </Affix>
                                </div> */}
                            </Col>
                        </Row>
                    </Card>
                </div>
            </QueueAnim >
        </DetailMainWrap>
    )
}

export default memo(DetailMain)
