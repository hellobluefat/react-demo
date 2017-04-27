import React from "react";

class Main extends React.Component{
  render(){
    let style = {
      aaa:{
        color:"blue",
        fontSize:"50px"
      },
      bbb:{
        color:"green",
        textAlign:"center"
      }
    }
    return(
    <div>我是内容
      <h1 style={style.aaa}>我是普通h1</h1>
      <h1 style={style.bbb}>我是普通h1</h1>
      <h1 style={Object.assign({},style.aaa,style.bbb)}>我是特殊h1</h1>
    </div>)
  }
}
 export default Main;
