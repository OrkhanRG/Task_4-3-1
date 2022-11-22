import React, { Component } from "react";

import Profile from "./Profile";
import './index.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Profile email='orxanismayilov851@gmail.com' name='Orxan Ismayilov' address='Azərbaycan Quba ray.' personalinfo='null' />
                <Profile email='gamidovmumin660@gmail.com' name='Mumin həmidov' address='Azərbaycan Qusar ray.' personalinfo='null' />
            </div>
        )
    }
}