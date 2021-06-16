import BeforeBlogCard from "./BeforeBlogCard"
import BeforeBlog from "./BeforeBlog"
import AfterBlog from "./AfterBlog"
import AfterBlogCard from "./AfterBlogCard"
import React from 'react'
import 'antd/dist/antd.css'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import {
    Typography, Divider, Spin, Card, Col, Row, Layout, Tag, Image, Affix,
} from 'antd';

import MarkdownBlock from "./MarkdownBlock"

export default class Blog extends React.Component {
    render() {

        return this.props.simple ?
            <MarkdownBlock raw={this.props.raw} /> :
            <Row gutter={[0, 16]}>
                {/* <Col span={24}>
                    <BeforeBlogCard />
                </Col> */}
                <Col span={24}>
                    <Card>
                        <BeforeBlog path={this.props.path}/>
                        <MarkdownBlock raw={this.props.raw} />
                        <AfterBlog  />
                    </Card>
                </Col>
                <Col span={24}><AfterBlogCard path={this.props.path}/> </Col>
            </Row>
    }
}