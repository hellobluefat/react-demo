import React from "react"
import img from './bg.jpg'
import img1 from './1.jpg'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      num:0,
      tab:0,
      show:true
    }
  }
  handleClick(num){
    this.setState({
      num:this.state.num+num,
      show:!this.state.show
    })
      console.log(this.state.num)
  }

  // handleClick1(num){
  //   this.setState({
  //     num:this.state.num-num
  //   })
  // }
  handleTab(tab){
    this.setState({
      tab:tab
    })
  }
  render(){
    return(
      <div className="clearfix" style={{width:"800px",height:"500px",background:"lightgreen",margin:"0 auto"}}>
        <p>数量是:{this.state.num}</p>
        <button onClick={this.handleClick.bind(this,1)}>+1</button>
        <button onClick={this.handleClick.bind(this,-1)}>-1</button>
        <br/>
        <button onClick={this.handleTab.bind(this,0)}>选项卡1</button>
        <button onClick={this.handleTab.bind(this,1)}>选项卡2</button>
        <button onClick={this.handleTab.bind(this,2)}>选项卡3</button>
        <br/>
        {/* {
          this.state.tab===0 ? <img src={img}/> :
          this.state.tab===1 ? <img src={img1}/> : "我是选项卡三"
        } */}
        <div style={{height:"100px",width:"100px",background:"red",display:this.state.show  ? "block" :"none"}}></div>
      </div>)
  }
}
export default App
