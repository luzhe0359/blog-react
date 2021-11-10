import React, { memo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, TagsOutlined, BlockOutlined, LinkOutlined } from '@ant-design/icons';
import { TopMenuWrap } from './style'

const TopMenu = () => {
    // 当前路径
    const [current, setCurrent] = React.useState('/home')

    // useLocation 返回当前URL的location对象
    let location = useLocation()
    useEffect(() => {
        setCurrent(location.pathname)
    }, [location])

    return (
        <TopMenuWrap>
            <div className="header-box">
                <div className="blog-name">
                    <a href="/">足各路</a>
                </div>
                <Menu selectedKeys={[current]} defaultSelectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="/home" icon={<HomeOutlined />}>
                        <Link to="/home">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="/tags" icon={<TagsOutlined />}>
                        <Link to="/tags">标签</Link>
                    </Menu.Item>
                    {/* <Menu.Item key="/album" icon={<AppstoreOutlined />}>
                        <Link to="/album">相册</Link>
                    </Menu.Item> */}
                    <Menu.Item key="/link" icon={<LinkOutlined />}>
                        <Link to="/link">友链</Link>
                    </Menu.Item>
                    <Menu.Item key="/about" icon={< BlockOutlined />}>
                        <Link to="/about">关于</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </TopMenuWrap>
    )
}

export default memo(TopMenu)