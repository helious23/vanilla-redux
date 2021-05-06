import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

// store 의 state 를 component(Home) 에서 props 로 받기 위해 connect 함수 안에 실행할 함수 생성 후 state 를 obj 로 return
// like getState()
// 필요 없을 경우 connect(null, ...) 으로 작성
function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

// store 의 state 를 변경하기 위해(dispatch) connect 의 2nd argument 로 mapDispatchToProps 함수 생성 후 dispatch 를 obj 로 return
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
