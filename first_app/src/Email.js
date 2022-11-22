import React, { Component } from "react";

export default class Email extends Component {
    render() {
        return(
            <>
            <h2>PROFILE</h2>
            <p>Email: <span>{this.props.email}</span> </p>
            </>
        )
    }
}