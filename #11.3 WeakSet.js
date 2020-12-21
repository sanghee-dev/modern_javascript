// weakly held, only object
const weakSet = new WeakSet()

const user = {
    age: 26,
}

weakSet.add(user);
weakSet.add({name: "sanghee"}); // 정의되지 않아 지워진다
console.log(weakSet); // WeakSet {{…}, {…}}

// memory -> collect garbage
console.log(weakSet); // WeakSet {age: 26}