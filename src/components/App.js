import React, { Component } from 'react';

// sub
class App extends React.Component{

    render() {
        // return 은 "소가로" 로 감싸야 되는구나
        return (
          // 컴포넌트는 반드시 하나의 최상위 테그로 시작해서 모든 것을 감싸야 한다
          <div >
            <h1> {this.props.title} </h1>
            {this.props.sub}
            <h2> {this.props.content} </h2>
          </div>
        )
    }
  }

  export default App;