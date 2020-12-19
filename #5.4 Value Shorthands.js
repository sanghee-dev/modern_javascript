const follow = checkFollow();
const alert = checkAlert();

// key == value일때 생략 가능
const settings = {
  notifications: {
    follow,
    isAlert: alert,
  },
};
