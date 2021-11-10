import styled from "styled-components"

export const TopMenuWrap = styled.div`
    width: 100%;
    height: 80px;
    position: absolute;
    top:0;
    left:0;
    z-index: 99;
    overflow: hidden;
    .header-box {
        max-width: 1200px;
        width: 100%;
        height: 80px;
        margin: 0 auto;
        padding: 0 16px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .blog-name {
        color: #1e90ff;
        font-size: 1.4rem;
        text-align: left;
        min-width: 70px;
    }
    /* antd 自带样式修改 */
    .ant-menu-horizontal {
        border-bottom: none;
        font-size:18px;
    }
    .ant-menu {
        background-color: transparent;
        display: inline-block;
    }
`