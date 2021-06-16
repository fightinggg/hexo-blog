import React from "react"
import Valine from 'valine';
const ValineAppId = "T7JBt0YPfeKdVQ0KPjrICOOm-gzGzoHsz";
const ValineAppKey = "oMcE8X0UKAVaDtK51UA1LuGL"

export default class Comments extends React.Component {

    componentDidMount() {
        new Valine({
            el: '#vcomments',
            appId: ValineAppId,
            appKey: ValineAppKey,
            visitor: true, // 阅读量统计
            path: this.props.path,
        })
    }

    render() {
        return <div id="vcomments"></div>
    }
}