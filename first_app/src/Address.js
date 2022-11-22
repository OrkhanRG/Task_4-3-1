import React, { Component } from "react";

export default class Address extends Component {
    render() {
        return(
            <>
            <p>Address: <span>{this.props.address}</span></p>
            </>
        )
    }
}