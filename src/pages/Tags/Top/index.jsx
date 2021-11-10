import React, { memo, useRef, useState, useEffect } from 'react'
import BScroll from '@better-scroll/core'
import QueueAnim from 'rc-queue-anim';
import PubSub from 'pubsub-js';
import { Tag, Tabs } from 'antd';
import { PushpinOutlined } from '@ant-design/icons';
import IconFont from '@/components/IconFont';
import { TagsTopWrap } from './style'
// api
import { findCategoryList } from '@api/category'
import { findTagList } from '@api/tag'

const { TabPane } = Tabs;


const TagsTop = () => {
    const tagScrollRef = useRef(null);
    const [currentCategory, setCurrentCategory] = useState(null) // 当前标签
    const [currentTag, setCurrentTag] = useState(null) // 当前标签
    const [categoryList, setCategoryList] = useState([]) // 分类列表
    const [tagList, setTagList] = useState([]) // 标签列表

    useEffect(() => {
        initData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // 初始化
    const initData = () => {
        // 获取分类数据
        findCategoryList().then(res => {
            const { data } = res
            setCategoryList(data)
            if (data.length > 0) {
                handleChangeCategory(data[0]._id)
            }
        })
        // 获取标签数据
        findTagList({ pageSize: 0 }).then(res => {
            setTagList(res.data)
            // 横向滚动条
            new BScroll(tagScrollRef.current, {
                scrollX: true,  //开启横向滚动
                click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
                scrollY: false, //关闭竖向滚动
            })
        })
    }
    // 分类切换，更新文章列表
    const handleChangeCategory = (_id) => {
        PubSub.publish('category', _id) // 发布消息
        setCurrentCategory(_id)
    }
    // 标签切换，更新文章列表
    const handleChangeTag = (_id) => {
        if (currentTag === _id) {
            return handleClose()
        }
        PubSub.publish('tag', _id)
        setCurrentTag(_id)
    }
    // 关闭选中标签，更新文章列表
    const handleClose = () => {
        setCurrentTag(null)
        PubSub.publish('category', currentCategory)
    }

    return (
        <TagsTopWrap>
            <QueueAnim className="box" type="top" duration={1000}>
                <div key={1} className="category-box">
                    <Tabs size="large" onChange={handleChangeCategory} centered>
                        {categoryList.map(c => (
                            <TabPane disabled={currentTag} tab={<span><IconFont type={c.icon} />{c.name}</span>} key={c._id} />
                        ))}
                    </Tabs>
                </div>
            </QueueAnim>
            <div className="box">
                <div ref={tagScrollRef} className="scroll-wrap">
                    <div className="content">
                        {
                            tagList.map(tag => (
                                <Tag icon={currentTag === tag._id ? <PushpinOutlined /> : null} key={tag._id} color={currentTag === tag._id ? "#1890ff" : "#ccc"} onClick={() => handleChangeTag(tag._id)}>{tag.name}</Tag>
                            ))
                        }
                    </div>
                </div>
            </div>
        </TagsTopWrap>
    )
}

export default memo(TagsTop)
