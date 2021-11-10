import React, { memo } from 'react'
import QueueAnim from 'rc-queue-anim';
import moment from 'moment'
import { Typography, Space, Tag, Divider } from 'antd';
import { MessageOutlined, LikeOutlined, EyeOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { DetailTopWrap } from './style'

const { Text } = Typography;
const IconText = ({ icon, text }) => (
    <Space className="icon-text">
        {React.createElement(icon)}
        {text}
    </Space>
);


const LinkTop = props => {
    const { title, createTime, meta = {}, tags = [] } = props;
    const colors = ['cyan', 'volcano', 'lime']
    return (
        <DetailTopWrap>
            <div>
                <QueueAnim type="top" duration={1000}>
                    <div key={1} className="slogan">
                        <Text ellipsis={{ tooltip: `${title}` }} > {title}</Text>
                    </div>
                    <div className="tags" key={2}>
                        <Space split={<Divider type="vertical" />}>
                            <IconText icon={ClockCircleOutlined} text={moment(createTime).format("YYYY-MM-DD")} />
                            <IconText icon={EyeOutlined} text={meta.views} key="list-vertical-star-o" />
                            <IconText icon={LikeOutlined} text={meta.likes} key="list-vertical-like-o" />
                            <IconText icon={MessageOutlined} text={meta.comments} key="list-vertical-message" />
                        </Space>
                    </div>
                    <div key={3} className="sub-slogan">
                        {
                            tags.map((tag, index) => {
                                return <Tag key={tag._id} color={colors[index]}>{tag.name}</Tag>
                            })
                        }
                    </div>
                </QueueAnim>
            </div>
        </DetailTopWrap >
    )
}

export default memo(LinkTop)
