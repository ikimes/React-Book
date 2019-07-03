import React, {Component } from 'react';
import Images from './external';



class singlePost extends Component {
    constructor(props){
        super(props);
        console.log({singlePost: this.props});

        this.state ={
            displayForm: false,
            editButton: true,
            editText:"Edit"
        }
    }

    handleEdit = () => {
        console.log("editing");
        if (this.state.editText == "Edit"){
            this.setState({
                displayForm: !this.state.displayForm,
                editButton: !this.state.editButton,
                editText: "Hide"
            });
        }else if (this.state.editText == "Hide"){
            this.setState({
                displayForm: !this.state.displayForm,
                editButton: !this.state.editButton,
                editText: "Edit"
            })
        }
    };
    handleDelete = (e) => {
        e.preventDefault();
        this.props.onDelete();
        //this.props.onPostSubmit({ author: authorVal, text: textVal },this.props);
    };
    handleSubmit(e, index) {
        e.preventDefault();
        console.log(this.props);
        var authorVal = e.target[0].value.trim();
        var textVal = e.target[1].value.trim();
        if (!textVal || !authorVal) {
            return;
        }
        this.props.changeEvent({ author: authorVal, text: textVal },index);
        this.setState({
            displayForm: !this.state.displayForm,
            editText: "Edit"
        });
    }
    render(){

        let visible = this.state.displayForm;

        if (visible){
            visible = "block";
        }else {
            visible = "none";
        }

        const styles={
            editForm: {
                display: visible
            }
        }

        return(
            <div className="comment">
                <h2 className="author">{this.props.author}</h2>
                <p>{this.props.text}</p>
                <button onClick={this.handleEdit}>{this.state.editText}</button>
                    <form style={styles.editForm} className="comment-form form-group" onSubmit={(event) => this.handleSubmit(event,this.props.id)}>
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
                <button onClick={this.props.delEvent}>Delete</button>
            </div>
        );
    }
}

export default singlePost;