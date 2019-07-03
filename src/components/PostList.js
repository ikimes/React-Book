import React, {Component } from 'react';
import Cdata from './external';
import Post from './singlePost';


class PostList extends Component {
    constructor(props){
        super(props);
        console.log({PostList: this.props});

        this.state={
            data: this.props.data
        }
    }

    handleDelete = (index,e) => {
        this.props.postDelete(index);
    };

    handleChange = (index,e) => {
        this.props.postChange(index);
    }
    render(){
        return(
            <div className="post-list">
                {
                    this.state.data.map((c,idx) => {
                        return(
                            <Post key={idx} id={idx} author={c.author} text={c.text} changeEvent={this.props.postChange.bind(this,idx)} delEvent={this.handleDelete.bind(this,idx)}/>
                        )
                })
                }
            </div>
        );
    }
}

export default PostList;