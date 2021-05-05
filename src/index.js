const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count; // update 함수가 있어야 화면에 변화된 값이 적용
};

const handleAdd = () => {
  count++;
  updateText();
};
const handleMinus = () => {
  count--;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
