
import {
    Typography, Divider, Spin, Card, Col, Row, Layout, Tag, Image,
    Affix, message, BackTop, Avatar, Menu, Dropdown, Button, Space
} from 'antd';
import toc from 'markdown-toc-unlazy';
const { Title, Paragraph, Text, Link } = Typography;

export default function Toc(props) {
    const dir = toc(props.raw).json
    return <Row>
        {
            dir.map(o =>
                <Col span={24} key={o.slug}>
                    <Space>
                        {[...Array(2 * (o.lvl - 1)).keys()].map(o => <div key={o}></div>)}
                        <Link href={"#" + o.slug}>{o.content}</Link>
                    </Space>
                </Col>
            )
        }
    </Row >
}