import styled from "styled-components"

export const AppWrap = styled.div`
    /* position: relative; */
    /* background-color: #e0e0e0; */
    background-color: #f4f5f5;
    /* background-color: $primary-color; */
    /* 顶部区域 */
    .slogan {
        text-align: center;
        margin-bottom: 20px;
        font-size: 40px;
    }
    .sub-slogan {
        text-align: center;
        margin-bottom: 20px;
        font-size: 20px;
    }
    @media screen and (max-width: 576px) {
        .slogan {
            font-size: 20px;
        }
        .sub-slogan {
            font-size: 16px;
        }
    }
    /* 内容区域 */
    .main-module {
        min-height: 60vh;
        max-width: 1200px;
        padding:0 16px;
        margin:0 auto;
        box-sizing: border-box;
    }
    .main-card {
        height: 100%;
        overflow: hidden;
        border-radius: 16px;
        background-color: #fff;
        /* transform: translateY(-30px); */
        margin-top: -30px;
        box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
    }
    /* antd */
    .ant-tag {
        font-size: 16px;
        line-height: 22px;
    }
`