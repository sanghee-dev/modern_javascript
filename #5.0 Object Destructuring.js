const settings = {
  notifications: {
    follow: true,
    alerts: true,
  },
  color: {
    theme: "dark",
  },
};

// 객체 비구조화, default값
const {
  notifications: { follow, alerts, unfollow = false },
} = settings;

console.log(follow, alerts, unfollow); // true true false

// 아예 없을 경우 default값
const {
  window: { unlock },
} = settings;
console.log(unlock); // window가 없으므로 error!

const { window: { unlock } = {} } = settings;
console.log(unlock); // unlock값이 없으므로 undefined

const { window: { unlock = true } = {} } = settings;
console.log(unlock); // true
