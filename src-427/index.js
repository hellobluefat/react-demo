import React from "react";
import ReactDOM from "react-dom";
import './main.css'
let hello = <p>hello world<br/><input type="button" value="提交"/></p>
ReactDOM.render(hello,document.getElementById('root'))

let p = document.getElementById('root').getElementsByTagName('p')
p[0].style.color="red"
let num = 1
let cla = "classnames"
// let Hello1 = React.createClass({
//   render:function(){
//     return(
//       <div>
//         <h1>我是第一种创建组件的方式，即将废弃</h1>
//       </div>
//     )
//   }
// })
// ReactDOM.render(<hello1></hello1>,document.querySelector('#root2'))
function W(){
  return(<span>1234</span>)
}
function Hello(){
  return(<span>2我是第二种创建方式，必须返回值，且返回值必须是JSX elements<W></W></span>)
}
class Hello1 extends React.Component{
  render(){
    return(
      <span>3我是第三种创建方式，</span>
    )
  }
}
let classNote = <div>
<h1>JSX语法</h1>
<p>JSX语法需要babel进行编译，转为这个方法React.createElement();</p>
<p>相邻的JSX元素必须包含在一个闭&nbsp;合标签内</p>
{/* <div><p></p><p></p></div> */}
<p>每一个标签必须闭合</p>
{/* <img src=""/> 单标签 自闭和 */}
<p>class=>className;for=>htmlFor</p>
<p>标签区分大小写</p>
<p>在JSX语法中可以嵌入变量或者求值表达式，可以写JS语法，用大括号包裹{num*2+100}</p>
<p>img标签路径添加方法：把图片存在src目录下 然后导入 import img  from "./1.jpg" 然后在标签路径处导入变量 类似47行id名引用变量</p>
<h1>React组件(当自定义标签使用，首字母必须大写)</h1>
<p>1 "React.createClass" 已经废弃</p>
<p id={cla}>2 </p>
<p id="cla1"></p>
</div>
ReactDOM.render(classNote,document.getElementById('root1'))
ReactDOM.render(<Hello></Hello>,document.querySelector('#classnames'))
ReactDOM.render(<Hello1></Hello1>,document.querySelector('#cla1'))
// import Header from "./header.js"
// import Main from "./main.js"
// import Footer from "./footer.js"
import App from "./app.js"
ReactDOM.render(<App/>,document.querySelector("#root3"))

var a = {a:1}
var b = {b:2}
var c = {c:3}
Object.assign(a,b,c)
console.log(a)
