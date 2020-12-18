const wrapper = document.querySelector("body");

const addWelcome = () => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.className = "title";
  h1.innerText = "Hello!";
  div.appendChild(h1);
  wrapper.appendChild(div);
};

// template literals
const addWelcome = () => {
  const div = `
    <div>
      <h1 class ="title">Hello!</h1>
    </div>
  `;
  wrapper.innerHTML = div;
};

setTimeout(addWelcome, 1000);
