import React, {Component } from 'react';
import Images from './external';


class Home extends Component {
    render(){
        return(
            <nav>
                <h1>Home Page!</h1>
                <image width="100px" height="100px" src={Images.orange}></image>
            </nav>
        );
    }
}

export default Home;