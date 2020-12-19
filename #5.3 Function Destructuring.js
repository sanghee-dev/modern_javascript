const settings = {
  color: "blue",
  notification: {
    alert: true,
    marketing: true,
  },
};

const saveSettings = ({ color = "green", notification }) => {
  console.log(color); // blue
  console.log(notification); // { alert: true, marketing: true }
};

saveSettings(settings);
