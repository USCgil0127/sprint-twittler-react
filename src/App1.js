import React from 'react'
import './App.css'

// main
class Twittler extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tweets: [
        {
          uuid: 1,
          writer: '김코딩👩🏿‍🦰',
          date: '2021-03-24',
          content: 'REACT는 어때요?',
        },
        {
          uuid: 2,
          writer: '조은길👨🏻‍',
          date: '2021-03-25',
          content: '쉽지 않아요~😭',
        },
        {
            uuid: 3,
            writer: '코드 스테이츠👨🏻‍🚀',
            date: '2021-03-25',
            content: '부족한 부분은 주말 이용해서 하세요🤖',
          },

      ],
      value: '',
      //
      // name: "",
      //
    }
    // this.handleChange1 = this.handleChange1.bind(this)
   

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  // //
  // handleChange1(event) {
  //   this.setState({ name: event.target.value })
  // }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleClick(val , name) {
    let newTweet = {
      uuid: this.state.tweets.length + 1,
      writer: "조은길",
      date: new Date().toLocaleString(),
      content: val,
    }

    if( !newTweet.content.trim() ){
      // 빈칸이나 스페이스만 으로 제출시 처리 방법
      alert("Fill in the blank!" )
    }
    else{
    this.setState({ tweets: [...this.state.tweets, newTweet] })
    this.setState({ value: '' })
    }
  }
  render() {
    return (
      <div class="entire">
        <div> 🍎 기본적인 트위틀러 기능 구현 🍎</div>
        
        {/* <input type="text" placeholder = "UserName" value={this.state.name} onchange={this.handleChange1}/> */}
        
        <div id="writing-area">
          <textarea
            placeholder = "Comment"
            id="new-tweet-content"
            cols="30"
            rows="3"
            onChange={this.handleChange}
            value={this.state.value}
          ></textarea>

        <div></div>

          <button
            id="submit-new-tweet"
            onClick={() => {
              this.handleClick(this.state.value)
            }}
          >
            tweet 하기
          </button>
        </div>
        <div>
          <ul id="tweets">
            {this.state.tweets.map(tweet => {
              return (
                <SingleTweet
                  writer={tweet.writer}
                  date={tweet.date}
                  content={tweet.content}
                  key = { tweet.uuid }
                />
                
              )
            })}
          </ul>
        </div>

      </div>
    )
  }
}

// 요구 사항에 맞게 함수 컴포넌트로 만들어 줌
function SingleTweet(props) {
  return (
    <li>
      <div>{props.writer}</div>
      <div>{props.date}</div>
      <div>{props.content}</div>
    </li>
  )
}

export default Twittler


// class SingleTweet extends React.Component {
//   render () {
//     return (
//       <li>
//         <div>{this.props.writer}</div>
//         <div>{this.props.date}</div>
//         <div>{this.props.content}</div>
//       </li>
//     )
//   }
// }



