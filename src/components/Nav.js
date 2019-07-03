import React, {Component } from 'react';
import {NavLink} from 'react-router-dom';


class Nav extends Component {
    render(){
        return(
            <nav>
                <NavLink exact activeClassName="active" to={"/"}>Home</NavLink>
                <NavLink activeClassName="active" to={"/about"}>About</NavLink>
                <NavLink activeClassName="active" to={"/contact"}>Post</NavLink>
            </nav>
        );
    }
}

export default Nav;