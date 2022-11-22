import React, { Component } from "react";

import Email from "./Email";
import Name from "./Name";
import Address from "./Address";
import PersonalInfo from "./PersonalInfo";
import './index.css'

export default class Profile extends Component {
    render() {
        const { email, name, address, personalinfo } = this.props
        return (
            <div className="block">
                <Email email = {email} />
                <Name name = {name} />
                <Address address = {address} />
                <PersonalInfo personalinfo = {personalinfo} />
            </div>
        )
    }
}