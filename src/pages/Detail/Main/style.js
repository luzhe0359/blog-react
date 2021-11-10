import styled from "styled-components"

export const DetailMainWrap = styled.div`
    .list-context{
        font-size: 1.05rem;
        color: #777;
        line-height: 1.9rem;
        img {
            width:100% ;
            border-radius:5px;
            border:1px solid #f0f0f0;
            max-width:1000px !important;
            display: block;
            margin: 8px auto;
        }
    }
    .remove-transform {
        transform: none !important;
    }
    .anchor-context {
        padding-left: 16px;
        .anchor-title {
            font-size: 18px;
        }
        .anchor-body {
            padding-top: 20px;
        }
    }
    pre {
        display: block;
        background-color: #283646 !important;
        padding: .5rem !important;
        overflow-y: auto;
        font-weight: 300;
        font-family: Menlo, monospace;
        border-radius: .3rem;
    }

    pre >code{
        border: 0px !important;
        background-color: #283646 !important;
        color:#FFF;
    }
    code {
        display: inline-block;
        background-color: #fff5f5;
        border-radius: 3px;
        padding-left: 5px;
        padding-right: 5px;
        color: #ff502c;
        margin: 0px 3px;
        line-height: 1.1rem;
        font-size: .87rem;
    }
`