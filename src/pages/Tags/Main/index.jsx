import React, { memo, useState, useEffect } from 'react'
import QueueAnim from 'rc-queue-anim';
import PubSub from 'pubsub-js';
import { Card } from 'antd';
import ArticleList from '@components/ArticleList'
// api
import { findArticleList } from '@api/article'

const TagsMain = () => {
    const [articleList, setArticleList] = useState([])
    const [loading, setLoading] = useState(true)
    const [pageParams, setPageParams] = useState({
        pageNum: 1,
        pageSize: 5,
        total: 0,
        tag: null,
        category: null
    })

    useEffect(() => {
        const category = PubSub.subscribe('category', function (msg, _id) { //订阅
            handleChange({ pageNum: 1, category: _id, tag: '' })
        });
        const tag = PubSub.subscribe('tag', function (msg, _id) {
            handleChange({ pageNum: 1, tag: _id, category: '' })
        });
        return () => {
            PubSub.unsubscribe(category);
            PubSub.unsubscribe(tag);
        }
    }, [pageParams]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (pageObj = {}) => {
        findArticleList({ ...pageParams, ...pageObj }).then(res => {
            setLoading(false)
            setArticleList(res.data)
            setPageParams({ ...pageParams, ...pageObj, total: res.total })
        }).catch(() => setLoading(false))
    }

    return (
        <>
            <QueueAnim type="bottom" duration={1000} >
                <div className="main-module" key={1}>
                    <Card key={1} className="main-card">
                        <ArticleList listData={articleList} handleChange={handleChange} {...pageParams} loading={loading} />
                    </Card>
                </div>
            </QueueAnim >
        </>
    )
}

export default memo(TagsMain)
