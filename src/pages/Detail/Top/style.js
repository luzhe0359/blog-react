import styled from "styled-components"

export const DetailTopWrap = styled.div`
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:url(${require("@/assets/imgs/bg_5.jpg").default}) no-repeat;
    background-size: auto 100%;
    background-position: center center;
    > div {
        width: 100%;
        max-width: 1200px;
        margin:0 auto;
        overflow: hidden;
    }
    .tags {
        display: flex;
        justify-content: center;
    }
    .icon-text {
        font-size: 18px;
    }
    .slogan {
        padding: 0 16px;
        box-sizing: border-box;
        text-align: center;
        margin-bottom: 20px;
        font-size: 40px;
    }
    .sub-slogan {
        text-align: center;
        margin-top: 10px;
    }
    @media screen and (max-width: 576px) {
        .slogan {
            font-size: 20px;
        }
        .icon-text {
            font-size: 16px;
        }
    }
`