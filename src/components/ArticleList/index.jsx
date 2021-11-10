import React, { memo } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { List, Space, Typography } from 'antd';
import IconFont from '@/components/IconFont';
import { MessageOutlined, LikeOutlined, EyeOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { ArticleListWrap } from './style'

const { Paragraph } = Typography;
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ArticleList = (props) => {
    const { listData, handleChange, pageSize, pageNum, total, loading } = props
    console.log(loading);
    return (
        <ArticleListWrap>
            <List
                itemLayout="vertical"
                size="large"
                loading={loading}
                pagination={{
                    onChange: pageNum => {
                        handleChange({ pageNum });
                    },
                    pageSize,
                    defaultCurrent: 1,
                    current: pageNum,
                    total,
                    hideOnSinglePage: true,
                    size: "small"
                }}
                dataSource={listData}
                footer={
                    <div> </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item._id}
                        actions={[
                            <IconText icon={EyeOutlined} text={item.meta.views} key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text={item.meta.likes} key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text={item.meta.comments} key="list-vertical-message" />,
                            // <IconText icon={FireOutlined} text={item.meta.comments} key="list-vertical-message" />,
                            // <FireOutlined style={{ display: item.isTop ? "block" : "none" }} />
                        ]}
                        extra={
                            <>
                                <Space style={{ color: "#1890ff" }}>
                                    <IconFont type={item.category.icon} />
                                    {item.category.name}
                                </Space>
                                <div className={`top ${item.isTop ? "is-top" : ""}`}>TOP</div>
                                <Link to={`/detail/${item._id}`}>
                                    <img
                                        width={272}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                </Link>
                            </>
                        }
                    >
                        <List.Item.Meta
                            title={<Link to={`/detail/${item._id}`}>{item.title}</Link>}
                            description={<IconText icon={ClockCircleOutlined} text={moment(item.createTime).format("YYYY-MM-DD")} />}
                        />
                        <Paragraph ellipsis={{ rows: 2, tooltip: item.desc }}>{item.desc}</Paragraph>
                    </List.Item>
                )}
            />
        </ArticleListWrap>
    )
}

export default memo(ArticleList)