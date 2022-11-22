import React, { Component } from "react";

export default class PersonalInfo extends Component {
    render() {
        return(
            <>
            <p>PersonalInfo: <span>{this.props.personalinfo}</span></p>
            </>
        )
    }
}