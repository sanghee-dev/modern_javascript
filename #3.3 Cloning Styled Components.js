// 1.
const styled = (css) => console.log(css); // ["color: blue", raw: Array(1)]
styled`color: blue`;

// 2. <h1> 만들기
const styled = (element) => {
  const el = document.createElement(element);
  console.log(el); // <h1></h1>
};

const title = styled("h1");

// 3. 속성 추가
const styled = (aElement) => {
  const el = document.createElement(aElement);
  return (args) => {
		console.log(args[0]); // color: blue;
};

const title = styled("h1")`
  color: blue;
`;

// 4. color: blue인 title이 생성된다
const styled = (element) => {
  const el = document.createElement(element);
  return (args) => {
    el.style = args[0];
    return el;
  };
};

const title = styled("h1")`
  color: blue;
`;
title.innerText = "title";
document.body.appendChild(title);