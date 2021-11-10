import styled from "styled-components"

export const TagsTopWrap = styled.div`
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${require("@/assets/imgs/bg_6.jpg").default}) no-repeat;
    background-size: auto 100%;
    background-position: center center;
    .box {
        width: 100%;
        max-width: 1200px;
        padding: 16px;
    }
    .scroll-wrap {
        width: 100%;
        overflow: hidden;
    }
    .content {
        width: fit-content;
        white-space: nowrap;
        animation: fade-in .5s ease-in;
    }
    @keyframes fade-in {
        0% {opacity: 0;}
        40% {opacity: 0;}
        100% {opacity: 1;}
    }

    @media screen and (max-width: 576px) {
        .box {
            padding: 0 16px;
        }
    }
    /* antd */
    .ant-tabs-nav {
        &::before{
            border-bottom: none !important;
        }
    }
    .ant-tabs-tab-disabled {
        &.ant-tabs-tab-active {
            opacity: 0.39;
        }
    }
`