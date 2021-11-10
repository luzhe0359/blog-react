import styled from "styled-components"

export const HomeTopWrap = styled.div`
    height: 40vh;
    width: 100%;
    padding: 60px 0 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:url(${require("@/assets/imgs/bg_1.jpg").default}) no-repeat;
    background-size: auto 100%;
    background-position: center center;
    .tag-box {
        position: relative;
        left: 50%;
        max-width: 250px;
        margin-left: -125px;
    }
    /* antd */
    .ant-avatar {
        margin: 0 5px;
    }
`