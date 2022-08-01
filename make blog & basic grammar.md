# Part1. 블로그 제작 & 기초문법

## 1-1. React 쓰는 이유

### 1. Single Page Application 만들 때 쓴다

- 새로고침 없이 부드럽게 동작 (모바일 앱과 사용성이 유사함)
- JS로도 가능하지만 코드가 길고 복잡해진다 -> 그래서, React 라이브러리 쓴다

### 2. React 쓰면 html 재사용이 편리하다

### 3. 같은 문법으로 앱개발이 가능하다

-> HTML CSS JS 웹개발을 편리하게 도와주는 라이브러리!

## 1-2. 개발환경 셋팅 & 프로젝트 생성

개발환경 셋팅

1. Node.js 설치 (LTS)
2. VSCode 에디터 설치

프로젝트 생성

1. 작업용 폴더 생성 -> shift + 우클릭 -> PowerShell/터미널 열기 누른다
2. 열린 터미널에 npx create-react-app 프로젝트명 (create react app 구글검색! -> npm 필요 - nodejs 설치시 함께 온다)
3. 에디터에서 File-Open Folder로 blog 폴더 오픈
4. 미리보기 듸우기는 터미널에서 npm start

프로젝트 파일

- node_modules : 프로젝트 구동에 필요한 라이브러리 코드 보관함
- public : static 파일 모아놓는 곳(html, img 파일 등)
- src : 코드 작성하는 곳 (소스코드 보관함)

App.js -> index.js -> index.html

- package.json : 프로젝트 정보

## 1-3. 레이아웃 만들 때 쓰는 JSX 문법 3개

JSX : .js 파일에서 쓰는 html 대용품

리액트에서 `<div>` 만드는 법
`React.createElement('div', null, 'Hello World')`

JSX 사용하면 `<div></div>`

1. class 넣을 땐 className
   (참고) css 파일 쓰려면 상단에서 import 'css파일 경로'
2. 변수넣을 땐 {중괄호} : 데이터 바인딩
3. style 넣을 땐 style={{스타일명:'값'}} (object 자료 형식으로 넣는다)

### 1-4. 중요한 데이터는 변수말고 state에 담는다

return () 안에 html 코드를 짜는데,
병렬로 태그 2개 이상 기입금지

- 자료 잠깐 저장할 땐 변수 (let, const)
- 자료 잠깐 저장할 때 state도 가능

1. import {useState}
2. useState(보관할 자료)
3. let [작명, 작명]
   [state에 보관했던 자료, state 변경 도와주는 함수]

Destructuring 문법 (array 안에 있던 자료들을 각각 변수로 빼준다)

- let num = [1, 2]; -> 1과 2를 변수로 빼고 싶다
- let a = num[0];
- let c = num[1];

- let [a, c] = [1, 2]

일반 변수는 갑자기 변경되면 html에 자동으로 반영이 안된다
state는 갑자기 변경되면 state 쓰던 html이 자동으로 재렌더링된다

자주 변경될 것 같은 html 부분은 state로 만들어놓기

### 1-5. 버튼에 기능 개발을 해보자 & 리액트 state 변경하는 법
