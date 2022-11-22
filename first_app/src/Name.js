import React, { Component } from "react";

export default class Name extends Component {
    render() {
        return(
            <>
            <p>Name: <span>{this.props.name}</span></p>
            </>
        )
    }
}