import React, {Component } from 'react';


class postForm extends Component {

    constructor(props){
    super(props);
    console.log({postForm: this.props});
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state ={
            textContent: "Create Your Post Here"
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.props);
        var authorVal = e.target[0].value.trim();
        var textVal = e.target[1].value.trim();
        if (!textVal || !authorVal) {
            return;
        }
        this.props.onPostSubmit({ author: authorVal, text: textVal });
        e.target[0].value = "";
        e.target[1].value = "";
        return;
    }

    render(){
        const {postToEdit} = this.props;
        const {title,body,author} = this.state;
        return(
            <form className="comment-form form-group" onSubmit={(event) => this.handleSubmit(event)}>
                <div className="input-group">
                    <span className="input-group-addon">Name</span>
                    <input type="text" placeholder="Your name" className="form-control" />
                </div>
                <div className="input-group">
                    <span className="input-group-addon">Comment</span>
                    <input
                        type="text"
                        placeholder="Say something..."
                        className="form-control"
                    />
                </div>
                <input type="submit" value="Post" className="btn btn-primary" />
            </form>
        );
    }
}

export default postForm;