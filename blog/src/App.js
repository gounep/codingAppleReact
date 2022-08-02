import "./App.css";
import React, { useState } from "react";

function App() {
  let post = "역삼 텐동 맛집"; // 서버에서 가져온 데이터라 가정
  // document.querySelector('h4').innerHTML = post; // 변수에 있던 자료를 html에 넣고 싶으면
  let [title, setTitle] = useState([
    "아침 메뉴 추천",
    "점심 메뉴 추천",
    "저녁 메뉴 추천",
  ]);
  let [likes, setLikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [entered, setEntered] = useState("");
  const today = new Date().toLocaleString("en-US", { timeZone: "UTC" });
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "powderblue", fontSize: "16px" }}>React Blog</h4>
      </div>
      <button
        onClick={() => {
          let copy2 = [...title];
          copy2.sort();
          setTitle(copy2);
          console.log(copy2);
        }}
      >
        가나다순 정렬
      </button>
      <button
        onClick={() => {
          let copy = [...title];
          // let copy = title;
          copy[0] = "멋진 카페 추천";
          setTitle(copy);
        }}
      >
        change first title
      </button>
      {/* <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setLikes(likes + 1);
            }}
          >
            👍
          </span>
          {likes}
        </h4>
        <p>8월 1일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>8월 1일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            // {
            //   modal === true ? setModal(false) : setModal(true);
            // }
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>8월 1일 발행</p>
      </div>
       */}
      {title.map(function (a, idx) {
        return (
          <div className="list" key={idx}>
            <div>
              <h4
                onClick={() => {
                  setModal(true);
                  // setModal(!modal);
                  setModalTitle(idx);
                }}
              >
                {title[idx]}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    let copied = [...likes];
                    copied[idx] = copied[idx] + 1;
                    setLikes(copied);
                  }}
                >
                  👍
                </span>
                {likes[idx]}
              </h4>
              <p>{today} 발행</p>
            </div>
            <button
              onClick={() => {
                let removed = [...title];
                removed.splice(idx, 1);
                setTitle(removed);
              }}
            >
              ❌
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setEntered(e.target.value);
          console.log(entered);
        }}
      />
      <button
        disabled={!(entered.length > 0)}
        onClick={() => {
          let added = [...title];
          added.unshift(entered);
          setTitle(added);
          likes.unshift(0);
        }}
      >
        추가하기
      </button>
      {modal === true ? (
        <Modal
          setTitle={() => {
            let copy3 = [...title];
            copy3[0] = "리액트 강의 추천";
            setTitle(copy3);
          }}
          color={"skyblue"}
          title={title}
          modalTitle={modalTitle}
        />
      ) : null}
      <Modal2></Modal2>;
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.setTitle}>글수정</button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kate",
      age: "20",
    };
  }
  render() {
    return (
      <div>
        안녕 {this.state.age}!
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
