import styled from "styled-components"

export const LinkMainWrap = styled.div`
    .ant-list-item {
        transition: all 0.5s ease;
        border-radius: 10px;
        .ant-list-item-extra {
            overflow: hidden;
        }
        .ant-card {
            background-color: #f0f0f0;
            border-radius: 10px;
        }
        img {
            transition: all 0.5s ease;
        }
        &:hover {
            border-radius: 10px;
            box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
            transform: scale(1.01);
            img {
                transform: scale(1.2);
            }
        }
    }

    /* antd */
    div.ant-typography, .ant-typography p {
        margin-bottom: 0;
    }
`