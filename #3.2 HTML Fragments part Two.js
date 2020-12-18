const wrapper = document.querySelector("body");

const friends = ["cat", "dog", "bread"];

const list = `
  <h1>I love!</h1>
  <ul>
    ${friends.map((friend) => `<li>${friend}</li>`).join("")}
  </ul>
`;

wrapper.innerHTML = list;

// <li>cat</li> <li>dog</li> <li>bread</li>이므로 합친다
console.log(friends.map((friend) => `<li>${friend}</li>`).join(""));
