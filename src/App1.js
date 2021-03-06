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
          writer: '๊น์ฝ๋ฉ๐ฉ๐ฟโ๐ฆฐ',
          date: '2021-03-24',
          content: 'REACT๋ ์ด๋์?',
        },
        {
          uuid: 2,
          writer: '์กฐ์๊ธธ๐จ๐ปโ',
          date: '2021-03-25',
          content: '์ฝ์ง ์์์~๐ญ',
        },
        {
            uuid: 3,
            writer: '์ฝ๋ ์คํ์ด์ธ ๐จ๐ปโ๐',
            date: '2021-03-25',
            content: '๋ถ์กฑํ ๋ถ๋ถ์ ์ฃผ๋ง ์ด์ฉํด์ ํ์ธ์๐ค',
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
      writer: "์กฐ์๊ธธ",
      date: new Date().toLocaleString(),
      content: val,
    }

    if( !newTweet.content.trim() ){
      // ๋น์นธ์ด๋ ์คํ์ด์ค๋ง ์ผ๋ก ์ ์ถ์ ์ฒ๋ฆฌ ๋ฐฉ๋ฒ
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
        <div> ๐ ๊ธฐ๋ณธ์ ์ธ ํธ์ํ๋ฌ ๊ธฐ๋ฅ ๊ตฌํ ๐</div>
        
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
            tweet ํ๊ธฐ
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

// ์๊ตฌ ์ฌํญ์ ๋ง๊ฒ ํจ์ ์ปดํฌ๋ํธ๋ก ๋ง๋ค์ด ์ค
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



