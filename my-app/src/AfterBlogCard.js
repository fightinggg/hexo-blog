import Comments from "./Comments"
import { Card } from "antd"

export default function AfterBlogCard(props) {
    return <>
        <Card><Comments path={props.path} /></Card>
    </>
}