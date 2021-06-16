import React from 'react'
import 'antd/dist/antd.css'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import mermaid from 'mermaid'
import {
  Typography, Divider, Spin, Card, Col, Row, Layout, Tag, Image, Affix,
  message, BackTop, Avatar, Menu, Dropdown, Button, Space
} from 'antd';



import BlogSider from "./BlogSider"
import Blog from "./Blog"
import MyIcon from "./MyIcon"

function Properties(props) {
  const properties = document.querySelector(`meta[name='${props.name}']`)?.content;
  return (
    properties == null ? <div /> :
      <Space>
        <MyIcon type={props.icon}></MyIcon>
        <Text type="secondary">{properties}</Text>
      </Space>)
}
function AllWordCount() { return <Properties name="all-word-count" icon="icon-word" /> }
function AllReadingTime() { return <Properties name="all-reading-time" icon="icon-clock" /> }


const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

mermaid.initialize({ startOnLoad: true });


const raw = document.getElementById('raw').innerHTML
const abbrlink = document.querySelector(`meta[name='abbrlink']`)?.content;
document.getElementById('raw').hidden = true
document.getElementById('hint').hidden = true

export default class App extends React.Component {
  render() {
    return <div>
        <Layout style={{ minHeight: '100vh' }}  >
          <BackTop />

          <Header style={{ background: "#f0f2f5", padding: "18px", height: "auto" }} >
            <Menu mode="horizontal" defaultSelectedKeys={['2']} >
              {[
                ["首页", "/"],
                ["关于", "/fightinggg/README.html"],
                ["标签", "/tags"],
                ["分类", "/categories"],
                ["归档", "/archives"],
                ["友链", "/links"],
                ["热度排行", "/hot"]
              ].map(([k, v]) => <Menu.Item key={k}><a href={v}>{k}</a></Menu.Item>)}
            </Menu>
          </Header>

          <Layout>
            <BlogSider raw={raw} style={{ background: "#f0f2f5", margin: "0px 0px 0px 16px" }} />
            < Content style={{ margin: "0px 16px 0px 16px" }}>
              <Blog raw={raw} path={"/"+abbrlink+".html"} />
            </Content>
          </Layout>

          <Footer style={{ textAlign: 'center' }}>
            <Text type="secondary">WSX's Blog</Text><br />
            <Text type="secondary"><MyIcon type="icon-react" />React FrameWork</Text><br />
            <Text type="secondary">Powered By Polin And Fightinggg</Text><br />
            <Space split={<Text type="secondary">|</Text>}>
              <AllWordCount />
              <AllReadingTime />
            </Space>
          </Footer>

        </Layout >
      </div >
  }
}

