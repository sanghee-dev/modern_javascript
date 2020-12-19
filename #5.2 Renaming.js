const settings = {
  color: {
    chosen_color: "dark",
  },
};

let chosenColor = "blue"; // blue

// let의 chosenColor를 업데이트한다.
({
  color: { chosen_color: chosenColor = "light" },
} = settings);

console.log(chosenColor); // dark
