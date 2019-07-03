import React, {Component } from 'react';
import Block from './block';
import {Helmet} from "react-helmet";


class blockContainer extends Component {
    constructor(props){
        super(props);
        this.state ={
            blockList: [{color:0},{color:0},{color:0},{color:0}],
            colorList: ["white","blue","yellow","green"],
            color:"white"
        }
    }
    handleChange(index,color,num){
         this.state.blockList[index].color = num;
         let id = this.state.blockList;
        this.setState({
            blockList: this.state.blockList
        });
        console.log(id[0].color,id[1].color,id[2].color,id[3].color)
        if(id[0].color === id[1].color && id[0].color === id[2].color && id[0].color == id[3].color){
            this.setState({
              color: this.state.colorList[id[num-1].color]
            });
        }

        console.log("Changed!");
    }

    render(){
        return(

            <React.Fragment>
                <Helmet>
                    <style>{'body {background-color: '+this.state.color+';}'}</style>
                </Helmet>
                {
                    this.state.blockList.map((c,idx) => {
                        return(
                            <Block key={idx} id={c} color={c.color} onChange={this.handleChange.bind(this,idx)} />
                        )
                })
                }
            </React.Fragment>
        );

    }
}

export default blockContainer;