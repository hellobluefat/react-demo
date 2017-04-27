import React from "react";
import {lightgreen} from "./styles.js"
import {lightblue} from "./styles.js"
import bg from "./bg.jpg"
class Header extends React.Component{
  getstyles(){
    return{color:"pink"}
  }
  render(){
    let styles ={color:'lightgreen'}
    return(
      <div style={{backgroundImage:`url(${bg})`,height:"500px"}}>
        <p style={{color:'lightblue',fontSize:"50px"}}>我是头部</p>
        <p style={styles}>我是头发</p>
        <p style={this.getstyles()}>我是头皮屑</p>
        <p style={{color:lightblue}}>我不知道</p>
        <p style={lightgreen}>我知道</p>
      </div>
    )
  }
}
export default Header
