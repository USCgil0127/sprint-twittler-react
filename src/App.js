import React, { Component } from 'react';
import TOC from "./components/TOC";
import App from "./components/App";
import './App.css'

// App
class Twittler extends Component {
  // 트위틀러가 리엑트가 갖고 있는 클래스인 Component를 상속함

  // 컴포넌트가 실행될 때, render()보다 먼저 실행이 되면서, 초기화를 담당한다.
  constructor(props){
    super(props);

    this.state = {
      // props 는 이게 안 되는 구나
      subject:{ title:'this is from the State', sub:"world wide Web!" },

      // state 에서 TOC의 value들을 바꿔보자!! 
      contents: [
        { id:1, title:'HTML from state', desc:"HTML is for information" },
        { id:2, title:'CSS from state', desc:"CSS is for design" },
        { id:3, title:'JS from state', desc:"JS is for interactive" },
        
      ]
    }

  }

  // 반드시 render라고 하는 함수가 있어야 한다.
  render() {
    return (
      <header>
    
          <App 
          title= {this.state.subject.title} 
          sub="world wide web!" 
          content=" 임의로 설정해준 값 ">
          </App>
          <App title="2nd WEB" sub="2nd world wide web!" ></App>
          <Test name="Gil" content="guess what?"></Test>
          
          <TOC data={this.state.contents} ></TOC> 
         
          {/* // 모듈로 쏴줄 본체에다가 이렇게 서브 클래스를 집어넣어줘서 사용이 가능하다. */}
        
      </header>

    ); // end of return
  }
}

// sub
class Test extends React.Component{

  render() {
      // return 은 "소가로" 로 감싸야 되는구나
      return (
        // 컴포넌트는 반드시 하나의 최상위 테그로 시작해서 모든 것을 감싸야 한다
        <div >
          <h3> {this.props.name} </h3>
          {this.props.sub}
          <h4> {this.props.content} </h4>
          이것도 나올까요??
          
        </div>
      )
  }
}




export default Twittler

// App.js에서 쓰는 문법은 유사 JS 문법이다. 그걸 쓰지 않으면 / 써주고 지져분해지기 때문에
// 우리가 유사 자바스크립트 문법을 사용하면, 알아서 컴퓨터 언어로 변환 되도록 만들어주는 것이
// 이 유사 자바스크립트가 페이스북에서 만든 JSX이다. 
// 

// 그리고 이 JSX로 짜면, 리엑트에서 알아서 JS로 변환해주는 거다.
// 리엑트의 컴포넌트는 정리 정돈같은 역할을 한다.