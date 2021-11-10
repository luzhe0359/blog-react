import styled from "styled-components"

export const AboutMainWrap = styled.div`
    max-width: 100%;
    overflow-x: clip;
    .card-shadow {
        font-size: 16px;
        border-radius: 50px;
        padding: 10px;
        box-sizing: border-box;
        background: linear-gradient(145deg, #f0f0f0, #cacaca);
        box-shadow:  39px 39px 78px #bebebe, -39px -39px 78px #ffffff;
        border: none;
    }
    .ant-row {
        padding-bottom: 220px;
    }
    .ant-col {
        &:nth-child(1) {
            transform: translate(50px,100px);
            .card-shadow {
                box-shadow:  -39px 39px 78px #bebebe, 39px -39px 78px #ffffff;
            }
        }
        &:nth-child(2) {
            transform: translate(0,-100px);
        }
        &:nth-child(3) {
            transform: translate(-100px,200px);
        }
    }
    .ant-timeline-item-tail {
        border-left: 2px solid #ffffff;
    }
    @media (max-width: 992px) {
        .ant-row {
            margin-top: -50px;
            padding-bottom: 100px;
        }
        .ant-col {
            transform: translate(0,0) !important;
            margin-bottom: 20px;
        }
    }
    @media (max-width: 768px) {
        .card-shadow {
            padding: 0;
            border-radius: 20px;
        }
        .ant-row {
            padding-bottom: 10px;
        }
    }
`