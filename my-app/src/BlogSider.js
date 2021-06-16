
import React from 'react'
import 'antd/dist/antd.css'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import { Typography, Card, Layout, Affix, Avatar, Button, Menu } from 'antd';

import MarkdownToc from "./MarkdownToc";

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;


export default class BlogSider extends React.Component {
    state = {
        width: document.body.clientWidth
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleSize);
        if (this.props.callback) {
            this.props.callback()
        }
    }

    componentWillUnmount() { window.removeEventListener('resize', this.handleSize); }

    handleSize = () => {
        this.setState({ width: document.body.clientWidth });
    }

    render() {
        if (this.state.width > 800) {
            return <Sider width={240} style={{...this.props.style }} >
                <Card >
                    <Avatar size={200} src="http://q1.qlogo.cn/g?b=qq&nk=246553278&s=640"></Avatar>
                    <center><Typography>fightinggg</Typography></center>
                    <Typography><Text type="secondary" style={{ fontSize: "0.8125em" }}>O ever youthful, O ever weeping</Text></Typography>
                </Card>
                <br></br>
                <Affix offsetTop={20} >
                    <Card bordered={false} bodyStyle={{ padding: "0", overflow: "scroll"  ,height: document.body.clientHeight - 136 - 20}} >
                        <MarkdownToc raw={this.props.raw}></MarkdownToc>
                    </Card>
                </Affix>
            </Sider >
        } else {
            return <></>
        }
    }
}


