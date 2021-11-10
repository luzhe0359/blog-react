import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom'

const Home = lazy(_ => import("@pages/Home"))
const Tags = lazy(_ => import("@pages/Tags"))
const Album = lazy(_ => import("@pages/Album"))
const Link = lazy(_ => import("@pages/Link"))
const About = lazy(_ => import("@pages/About"))
const Detail = lazy(_ => import("@pages/Detail"))

export const router = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to="/home" />
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/tags',
        component: Tags
    },
    {
        path: '/album',
        component: Album
    },
    {
        path: '/link',
        component: Link
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/detail/:_id?',
        component: Detail
    }
]