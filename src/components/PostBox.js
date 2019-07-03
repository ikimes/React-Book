import React, {Component } from 'react';
import Cdata from "./external";
import PostForm from './postForm';
import PostList from './PostList';


class PostBox extends Component {
    constructor(props){
        super(props);
        console.log(this.state);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
    }

    handlePostSubmit(post){
        this.props.data.push(post);
        let posts = this.props.data;
        let newPosts = posts.concat([post]);
        this.setState({ data: newPosts });
    };

    handlePostDelete(index){
        this.props.data.splice(index,1);
        this.setState({data: this.props.data});
        console.log("DELETED!");
    }

    handlePostChange(index, post) {
        this.props.data[index].author = post.author;
        this.props.data[index].text = post.text;
        this.setState({data: this.props.data });
        console.log("EDITED!");
    }
    render(){
        return(
            <div className="post-box">
                <PostForm
                    data={this.props.data}
                    onPostSubmit={this.handlePostSubmit}
                />
                <PostList
                    data={this.props.data}
                    postDelete={this.handlePostDelete.bind(this)}
                    postChange={this.handlePostChange.bind(this)}
                />
            </div>
        );
    }
}

export default PostBox;