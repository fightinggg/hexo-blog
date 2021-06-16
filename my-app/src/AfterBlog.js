
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


import MarkdownBlock from "./MarkdownBlock"
import MyIcon from "./MyIcon"
import BlogSider from "./BlogSider"
import Blog from "./Blog"

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const ValineAppId = "T7JBt0YPfeKdVQ0KPjrICOOm-gzGzoHsz";
const ValineAppKey = "oMcE8X0UKAVaDtK51UA1LuGL"

function Tags() {
    const keywords = document.querySelector("meta[name='keywords']")?.content;
    return (<Space wrap>
        {
            keywords == null ? <div /> : keywords.split(",")
                .filter(o => o != null)
                .map(o => <div key={o} ><MyIcon type="icon-tag" /> <Text type="secondary">{o}</Text> </div>)
        }
    </Space>)
}

function PreNextBlog() {
    const pre = document.querySelector("meta[name='pre-blog']")?.content;
    const next = document.querySelector("meta[name='next-blog']")?.content;
    return <Row>
        <Col span={4}><Button type="link" href={pre} disabled={pre == null}>上一篇Blog</Button></Col>
        <Col span={4} offset={16}><Button type="link" href={next} disabled={next == null}>下一篇Blog</Button></Col>
    </Row>
}



export default function AfterBlog() {
    return <>
        <Divider dashed={true}><MyIcon type="icon-chongwutubiao18" /> 本文结束，感谢您的阅读</Divider>

        <Paragraph>
            <blockquote>
                本文作者: fightinggg<br />
                本文链接: <Link href={"https://fightinggg.github.io" + window.location.pathname}>https://fightinggg.github.io{window.location.pathname}</Link><br />
                版权声明: 本博客所有文章除特别声明外，均采用 <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/zh-CN"><MyIcon type="icon-cc" /> BY-NC-SA</Link> 许可协议。转载请注明出处！
            </blockquote>
        </Paragraph>

        <Tags />

        <Divider></Divider>

        <PreNextBlog />
    </>
}