import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
};

number.innerText = 0;

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange); // subscribe : store 에 변화가 있을 때 onChange 호출

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" }); // dispatch : communicate with the store
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
