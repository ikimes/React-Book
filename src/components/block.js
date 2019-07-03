import React, {Component } from 'react';

class block extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            colorChange: 1
        }
    }


    _changeColor = () => {
        if (this.state.colorChange === 4){
            this.setState({
                colorChange:1
            });
        } else{
            this.setState({
                colorChange: this.state.colorChange + 1
            });
        }
        let color = this.state.colorChange.valueOf();
        let number = color;
        this.props.onChange(this.props.id,color);
    };


    render(){

    let backcolor;

    if (this.state.colorChange === 1){
        backcolor = "white"
    }else if (this.state.colorChange === 2) {
        backcolor = "blue"
    }else if (this.state.colorChange === 3) {
        backcolor = "yellow"
    }else if (this.state.colorChange === 4) {
        backcolor = "green"
    }
        const styles = {
            block: {
                width: "100px",
                height: "100px",
                backgroundColor: backcolor,
                display: "inline-block",
                margin: "10px",
                border: "1px solid #000"
            }
        };

        return(
        <div onClick={this._changeColor} style={styles.block}></div>
        )
    }
}

export default block;