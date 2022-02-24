# sprint-twittler-react

이번 시간에는 Twittler를 React 버전으로 재구성해봅니다. 이 스프린트의 목적은 완성을 시키는 것이 아니라, React를 충분히 이해하는 데 그 목적이 있습니다. 그러므로, 앞서 강의에서 던진 질문의 해답을 찾는 데에 이 스프린트를 활용하기 바랍니다. (솔로로 진행됩니다)

먼저 최종 완성된 결과물을 다음 링크를 통해 확인해봅시다. [👉 Twittler React 결과물](https://codestates.github.io/sw-twittler-react-published/)

직접 최종 결과물을 보고 동일하게 구현해봅시다. 이 스프린트는 테스트는 존재하지 않으며, 연습과 학습 그리고 제출 그 자체로 의미를 갖습니다.

## Bare Minimum Requirements
![](https://images.velog.io/images/gil0127/post/19f0312b-ae20-4f4c-9c0c-3541aa3ac629/1.png)

- 최종 결과물은 다음과 같이 두 컴포넌트가 존재해야 합니다.
   - `<Twittler>` - 전체 애플리케이션의 최상위 컨테이너입니다. 이 컴포넌트는 DOM에 직접 렌더링될 것입니다.
  - `<SingleTweet>` - 트윗 하나를 표시합니다. 함수 컴포넌트로 다양한 props(작성자, 날짜, 트윗 내용)를 받고, 이를 표시할 수 있습니다.
- Create React App을 이용하여 처음부터 프로젝트를 만들 수 있어야 합니다.
- React Developer Tool을 이용하여, 이미 완성된 결과물을 분석할 수 있어야 합니다.
- 전체 트윗 목록을 상태로 두어야 합니다.
- 새 글을 등록할 수 있어야 합니다. (하는데까지 해봅시다)

## Getting Started

### 1. `<Twittler>` 컴포넌트에 관하여...
상태를 갖는 클래스 컴포넌트입니다. 여기에는 전체 트윗 목록이 상태로 존재해야 합니다.

전체 트윗 목록은 다음과 같이 tweets라는 키에 트윗 객체가 담긴 배열로 존재해야 합니다.
```js
this.state = {
  tweets: [
    {
      uuid: 1,
      writer: "김코딩",
      date: "2020-10-10",
      content: "안녕 리액트"
    },
    {
      uuid: 2,
      writer: "박해커",
      date: "2020-10-12",
      content: "좋아 코드스테이츠!"
    }
  ]
}
```
render 함수를 통해 최종적으로 리턴되어야 할 내용은 다음과 같습니다.
```js
<div id="root">
  <div>
    <div>작성자: 김코딩</div>
    <div id="writing-area">
      <textarea id="new-tweet-content"></textarea>
      <button id="submit-new-tweet">새 글 쓰기</button>
    </div>
    <ul id="tweets">
      <!-- 이 부분은 this.state.tweets를 바탕으로 SingleTweet 컴포넌트가 반복 출력될 것입니다. -->
    </ul>
  </div>
</div>

```
### 2. React Developer Tools
facebook에서 제공하는 [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) 크롬 확장기능을 설치하세요. state나 props 등을 확인하고 디버깅 하는데에 있어서 보다 편리합니다.

이를 이용하면, 최종 결과물이 어떤 구조로 이루어져있고, 어떤 props가 전달되는지, 어떤 state가 존재하는지 전부 확인할 수 있습니다.
![](https://images.velog.io/images/gil0127/post/90c21b65-840c-4dde-abc8-db9f69d8da27/2.png)

### 3. '새 글 쓰기' 기능 구현
새 글 쓰기 기능을 구현하기 위해 찾아봐야 할 공식문서를 안내합니다. [9. 폼](https://ko.reactjs.org/docs/forms.html)을 읽어보아야 할 것입니다.

또한 새 트윗을 추가하려면, 기존 `this.state.tweets`에 새로운 항목이 추가가 되어야 합니다. 이 때 `this.state.tweets.push(새트윗)` **과 같이 사용하면 안됩니다.** 왜일까요? 그 근거를 공식문서를 통해 찾아보세요. 그럼, 어떻게 tweets 상태를 업데이트할 수 있을까요? 왜 그렇게 해야만 하나요?

---------------------

## 해당 Velog 링크

## Sprint를 마치고 느낀 점
