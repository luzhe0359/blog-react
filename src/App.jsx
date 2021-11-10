import React, { memo, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';
import { router } from './router';

// 主题
import theme from '@/utils/theme'
//TOP按钮
import { BackTop } from 'antd';
// 骨架
// import AppSkeleton from '@/components/Skeleton'
// 加载
import AppLoading from '@/components/Loading'
// 头部
import TopMenu from '@components/TopMenu'
// 底部
import Footer from '@components/Footer'
// 全局css
import { AppWrap } from './style'

export default memo(function App () {
    const basename = process.env.NODE_ENV === 'development' ? '' : '/react'
    return (
        <BrowserRouter basename={basename} >
            <ThemeProvider theme={theme}>
                <AppWrap>
                    <BackTop />
                    <TopMenu />
                    <Suspense fallback={<AppLoading />}>
                        {renderRoutes(router)}
                    </Suspense>
                    <Footer />
                </AppWrap>
            </ThemeProvider>,
        </BrowserRouter >
    )
})