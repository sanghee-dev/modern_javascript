const superBig = {
  [Symbol("sanghee")]: {
    pretty: true,
  },
  bye: "bye",
};

console.log(Object.getOwnPropertySymbols(superBig));
console.log(superBig.bye);
