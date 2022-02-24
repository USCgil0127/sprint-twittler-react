import React, { Component } from 'react';
// "리엑트"라는 라이브러리에서 컴포넌트를 로딩 한 거임!! 


// sub2  => this.props.data
// this.props === { data : [ { id:1... }, { id:2... }, { id:3... } ] }
// this.props.data === [ { id:1... }, { id:2... }, { id:3... } ]
class TOC extends Component{

    render(){

      var lists = [];
      var data = this.props.data;
      //var i = 0;
      for( let i=0; i < data.length; i++ ){

        ////////////// 리턴 밑에 있는 애들을 붙여넣기 한 거임
        lists.push( <li key={ data[i].id } > <a href= {data[i].id}> {data[i].title} </a> </li> );
                    /////// key는 리엑트가 자기가 내부적으로 필요해서 요청하는 것이기 때문에, 그냥 그러려니 하고 넣어주면 된다.
       // i = i + 1;
      }
  
      return(
              // <ul>
              //     <li><a href="1.html"> HTML </a> </li>
              //     <li><a href="2.html"> CSS </a> </li>
              //     <li><a href="3.html"> JavaScript </a> </li>
              // </ul>
              //{lists}
              // 무조건 전체를 감싸야 되는 테그가 하나는 있어야 한다.
              
              <ul>
                {lists}
              </ul>

      )
    }
  }

  // TOC 를 가져다 쓸 수 있게 함
  export default TOC;