import React, { memo, useState, useEffect } from 'react'
import { Card } from 'antd';
import QueueAnim from 'rc-queue-anim';
import ArticleList from '@components/ArticleList'
import { findArticleList } from '@api/article'

const HomeMain = () => {
    const pageSize = 10
    const [pageNum, setPageNum] = useState(1)
    const [total, setTotal] = useState(1)
    const [articleList, setArticleList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        handleChange()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (pageObj = {}) => {
        const defaultParams = {
            sortBy: 'isTop',
            descending: -1
        }
        findArticleList({ ...defaultParams, pageNum, pageSize, ...pageObj }).then(res => {
            setLoading(false)
            setArticleList(res.data)
            setTotal(res.total)
            setPageNum(pageObj?.pageNum || 1)
        }).catch(() => setLoading(false))
    }

    return (
        <>
            <QueueAnim type="bottom" duration={1000} >
                <div className="main-module" key={1}>
                    <Card key={1} className="main-card">
                        <ArticleList listData={articleList} handleChange={handleChange} {...{ pageNum, pageSize, total, loading }} />
                    </Card>
                </div>
            </QueueAnim >
        </>
    )
}

export default memo(HomeMain)
