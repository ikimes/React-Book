import React, {Component } from 'react';
import Cdata from "./external";
import PostBox from './PostBox';

class PostPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: Cdata.commentData
        }
    }
    render(){

        const styles={
            pullLeft: {
                cssFloat: "left",
            },
            pullLeft2: {
                cssFloat: "left",
                marginLeft: "40%"
            },
            container: {
                width:"80%",
                margin: "auto"
            }
        }
        return(
            <nav>
                <h1>Post Page!</h1>
                <PostBox data={this.state.data} />
            </nav>
        );
    }
}

export default PostPage;