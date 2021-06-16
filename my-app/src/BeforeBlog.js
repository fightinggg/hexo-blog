
import React from 'react'
import 'antd/dist/antd.css'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import mermaid from 'mermaid'
import {
    Typography, Divider, Spin, Card, Col, Row, Layout, Tag, Image, Affix,
    message, BackTop, Avatar, Menu, Dropdown, Button, Space
} from 'antd';
import { useEffect } from 'react';
import Valine from 'valine';

import MyIcon from "./MyIcon"



const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const ValineAppId = "T7JBt0YPfeKdVQ0KPjrICOOm-gzGzoHsz";
const ValineAppKey = "oMcE8X0UKAVaDtK51UA1LuGL"



function Properties(props) {
    const properties = document.querySelector(`meta[name='${props.name}']`)?.content;
    return (
        properties == null ? <div /> :
            <Space>
                <MyIcon type={props.icon}></MyIcon>
                <Text type="secondary">{properties}</Text>
            </Space>)
}


function PostDate() { return <Properties name="date" icon="icon-fabu1" /> }
function PostUpdated() { return <Properties name="updated" icon="icon-xiugai" /> }
function WordCount() { return <Properties name="word-count" icon="icon-word" /> }
function ReadingTime() { return <Properties name="reading-time" icon="icon-clock" /> }
function AllWordCount() { return <Properties name="all-word-count" icon="icon-word" /> }
function AllReadingTime() { return <Properties name="all-reading-time" icon="icon-clock" /> }




export default function BeforeBlog(props) {
    return <>
        <center>
            <Title>{document.querySelector("title").innerText}</Title>
        </center>


        <center>
            <Space split={<Text type="secondary">|</Text>}>
                <PostDate />
                <PostUpdated />
            </Space>
        </center>

        <center>
            <Space split={<Text type="secondary">|</Text>}>

                <Space id={props.path} className="leancloud_visitors" data-flag-title={document.querySelector("title").innerText}>
                    <MyIcon type="icon-eye" />
                    <Text type="secondary" className="leancloud-visitors-count">
                        <MyIcon type="icon-spinner" spin={true} />
                    </Text>
                </Space>


                <Space>
                    <MyIcon type="icon-comment" />
                    <Text type="secondary" className="valine-comment-count" data-xid={props.path}>
                        <MyIcon type="icon-spinner" spin={true} />
                    </Text>
                </Space>

                <WordCount />
                <ReadingTime />
            </Space>
        </center>
    </>
}