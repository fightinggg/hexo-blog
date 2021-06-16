import React, { Component } from "react";

export default function AsyncLoad({ loading, target }) {
    console.log(loading, target)
    
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: loading
            };
        }

        componentDidMount() {
            this.setState({
                component: target()
            });
        }

        render() {
            const c = this.state.component;
            console.log(c)
            return c;
        }
    }

    return AsyncComponent;
}