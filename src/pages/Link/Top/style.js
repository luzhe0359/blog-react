import styled from "styled-components"

export const LinkTopWrap = styled.div`
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:url(${require("@/assets/imgs/bg_2.jpg").default}) no-repeat;
    background-size: auto 100%;
    background-position: center center;
    @media screen and (min-width: 576px) {
        .ant-typography {
            display: inline-block;
        }
    }
`