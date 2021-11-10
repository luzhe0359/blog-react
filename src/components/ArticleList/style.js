import styled from "styled-components"

export const ArticleListWrap = styled.div`
    .ant-list-item {
        position: relative;
        border-radius: 10px;
        transition: all 0.5s ease;
        z-index: 100;
        margin-bottom: 2px;
        .ant-list-item-extra {
            position: relative;
            overflow: hidden;
            .ant-space {
                transform: translateY(-50px);
                transition: all .5s ease-in;
                position: absolute;
                top: 10px;
                right: 10px;
                z-index: 100;
                color: ${props => props.theme.primary};
            }
            .top {
                display: none;
            }
            .is-top {
                display: block;
                position: absolute;
                z-index: 100;
                left: -20px;
                top: 10px;
                width:80px;
                text-align:center;
                transform:rotate(-45deg);
                background-color: red;
                color:#fff;
            }
            img {
                transition: all 0.5s ease;
            }
        }
        &:nth-child(odd) {
            flex-direction: row-reverse;
            .ant-list-item-extra {
                margin-right: 40px;
                margin-left: 0;
                .ant-space {
                    left: 10px;
                }
                .is-top {
                    left: auto;
                    right: -20px !important;
                    transform:rotate(45deg);
                }
            }
            @media screen and (max-width: 768px) {
                .ant-list-item-extra {
                    margin-right: 24px;
                }
            }
            @media screen and (max-width: 576px) {
                .ant-list-item-extra {
                    margin: auto auto 16px;
                }
                padding: 10px 0 10px;
            }
        }
        &:hover {
            box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
            transform: translateY(-2px);
            z-index: 1000 !important;
            .ant-space {
                transform: translateY(0px);
            }
            img {
                transform: scale(1.2);
            }
        }

    }
    .ant-typography {
        color: rgba(0, 0, 0,.45);
    }
    @media screen and (max-width: 576px) {
        .ant-card-body {
            padding: 0 !important;
        }
        .ant-list-lg .ant-list-item {
            padding: 20px;
        }
    }
`