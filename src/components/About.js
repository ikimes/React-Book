import React, {Component } from 'react';
import Blocks from './blockContainer';
import {Helmet} from 'react-helmet';



class About extends Component {
    constructor(props){
        super(props);
    }

    handleChange(){

    }

    render(){
        const styles = {
            container: {
              minWidth: "100%",
                margin: "0 auto"
            }
        };

        return(
            <nav>
                <h1>About Page!</h1>
                <div style={styles.container}>
                    <Blocks/>
                </div>
            </nav>
        );
    }
}

export default About;