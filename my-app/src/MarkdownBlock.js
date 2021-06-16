
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import ReactMarkdown from 'react-markdown'
import * as PrismStyle from 'react-syntax-highlighter/dist/esm/styles/prism'
import * as HljsStyle from 'react-syntax-highlighter/dist/esm/styles/hljs'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'antd/dist/antd.css'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import mermaid from 'mermaid'
import gfm from 'remark-gfm'
import { BaseTable } from 'ali-react-table'
import { Typography, Layout, Image, Menu, Dropdown, Button, Space } from 'antd';
import rehypeRaw from 'rehype-raw';
import { useState } from 'react';
import toc from 'markdown-toc-unlazy';
import MyIcon from "./MyIcon"
import AsyncLoad from "./AsyncLoad"

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const HlStyle = { "prism": PrismStyle, "hljs": HljsStyle }

export default function MarkdownBlock(props) {
    // 代码颜色
    const [styleType, setStyle] = useState(["prism", "vs"])

    const components = {
        code({ node, inline, className, children, ...props }) {

            const match = /language-(\w+)/.exec(className || '')
            if (!inline) {
                if (match && match[1] === 'mermaid') {
                    return <center className='mermaid'>{String(children).replace(/\n$/, '')}</center>
                } else {
                    return <div>
                        <div style={{
                            backgroundColor: "#bdc3c7",
                            width: "100%", height: "22px"
                        }}>
                            <Space style={{ float: "right" }}>
                                <div></div>
                                <Dropdown
                                    overlay={
                                        <Menu onClick={({ key }) => { setStyle(key.split("-")) }}>
                                            {
                                                //'prism-coy,prism-okaidia,prism-solarizedlight,prism-tomorrow,prism-prism,prism-coyWithoutShadows,prism-darcula,prism-vs'
                                                (""
                                                    //+ "hljs-arta,hljs-brownPaper,hljs-docco,hljs-foundation,hljs-githubGist,"
                                                    //+ "hljs-github,hljs-googlecode,hljs-monokaiSublime,hljs-xcode,"
                                                    + "prism-coy,prism-okaidia,prism-solarizedlight,prism-tomorrow,"
                                                    + "prism-prism,prism-coyWithoutShadows,prism-darcula,prism-vs").split(",")
                                                    .map(o => <Menu.Item key={o}>{o.split("-")[1]} Style</Menu.Item>)
                                            }
                                        </Menu>
                                    } placement="bottomRight" arrow>
                                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}    > <MyIcon type="icon-color"></MyIcon>  </a>
                                </Dropdown>
                                <div></div>
                            </Space>
                        </div>

                        <SyntaxHighlighter
                            style={HlStyle[styleType[0]][styleType[1]]}
                            language={match ? match[1] : 'txt'}
                            PreTag="div"
                            children={String(children).replace(/\n$/, '')}
                            showLineNumbers={true}
                            customStyle={{
                                marginTop: 0,
                                marginBottom: 0,
                                border: "",
                                borderRadius: "",
                                boxShadow: "",
                                padding: "",
                                paddingTop: "1em",
                                paddingBottom: "1em"
                            }}
                            {...props} />
                    </div >
                }
            } else {
                return <code className={className} {...props}>{children}</code>
            }
        },
        h1({ level, node, children }) {
            return <h2 id={toc.slugify(children[0])}>{children[0]}</h2>
        },
        h2({ level, node, children }) {
            return <h3 id={toc.slugify(children[0])}>{children[0]}</h3>
        },
        h3({ level, node, children }) {
            return <h4 id={toc.slugify(children[0])}>{children[0]}</h4>
        },
        h4({ level, node, children }) {
            return <h5 id={toc.slugify(children[0])}>{children[0]}</h5>
        },
        h5({ level, node, children }) {
            return <h6 id={toc.slugify(children[0])}>{children[0]}</h6>
        },
        h6({ level, node, children }) {
            return <h6 id={toc.slugify(children[0])}>{children[0]}</h6>
        },
        p({ node, inline, className, children, ...props }) {
            while (true) {
                const a = 2
                if (a == 2) {
                    break;
                }
            }
            return <Paragraph>&emsp;&emsp;{children}</Paragraph>
        },
        // blockquote({node,children}){
        //   console.log(o)
        //   return o.node
        // },
        // TODO 这里有一个警告 div 不可以出现在p里面，
        img({ src, alt, node }) {
            var style = node.properties.style
            style = style == null ? "width:100%" : style
            const styleArray = style.split(";").filter(o => o != null && o != "")
            const styleObj = {}
            styleArray.forEach(element => {
                element = element.split(":")
                styleObj[element[0]] = element[1]
            });
            return <center><Image src={src} alt={alt} style={styleObj} /></center>
        },
        table(o) {
            console.log("markdownTable: ", o)
            const dataSource = o.children[1].props.children.map(o => o.props.children.map(item => item.props.children ? item.props.children[0] : null))
            const columns = o.children[0].props.children[0].props.children.map((item, index) => ({ code: index, name: item.props.children[0], align: 'center' }))
            return <BaseTable dataSource={dataSource} columns={columns} />
        }
    }



    return <ReactMarkdown
        children={props.raw}
        components={components}
        remarkPlugins={[remarkMath, gfm]}
        rehypePlugins={[rehypeKatex, rehypeRaw]} />

    // <AsyncLoad
    //     loading={<div>Loading...</div>}
    //     target={() => <ReactMarkdown
    //         children={props.raw}
    //         components={components}
    //         remarkPlugins={[remarkMath, gfm]}
    //         rehypePlugins={[rehypeKatex, rehypeRaw]} />}
    // />
}