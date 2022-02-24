import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Twittler from './App1';
// App.js 로부터 Twittler를 받아온다
import reportWebVitals from './reportWebVitals';

// root 경로 안으로 렌더 하고자 하는 컴포넌트를 통째로 render 해주는 함수
ReactDOM.render(
  <React.StrictMode>
    <Twittler /> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

// 리엑트로 작업되는 모든 것들은 <div id="root"> 테그에 붙도록 되있다.
// 그것을 가능하게 해주는 것이 line 13번  document.getElementById('root')
// 그리고 line 10번 <Twittler /> 리엑트를 이용해 만든 사용자 태그 즉 component이다.
// 이 트위틀러가 실제로 작성되는 것을 알려주는 것이 import Twittler from './App';  => ./App 은 App.js의 생략본
// App.js 파일에서 생성된 Twittler 라는 이유의 함수나 클래스에서 작성된 것들이 root 라는 id 테그로 붙는다.
// 더 정확하게는 render()가 리턴하는 값이다.