import "./App.css";
import { useState } from "react";

function App() {
  let post = "역삼 텐동 맛집"; // 서버에서 가져온 데이터라 가정
  // document.querySelector('h4').innerHTML = post; // 변수에 있던 자료를 html에 넣고 싶으면
  let [title, setTitle] = useState([
    "아침 메뉴 추천",
    "점심 메뉴 추천",
    "저녁 메뉴 추천",
  ]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "powderblue", fontSize: "16px" }}>React Blog</h4>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>8월 1일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>8월 1일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>8월 1일 발행</p>
      </div>
    </div>
  );
}

export default App;
