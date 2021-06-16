import React from "react";

export default class Xmp extends React.Component {
    componentDidMount() {
        if (this.props.callback) {
            this.props.callback()
        }
    }

    render() {
        return <xmp>{this.props.raw}</xmp>
    }
}