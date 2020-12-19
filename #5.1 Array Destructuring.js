const days = () => ["Mon", "Tue", "Wed"];

const [mon, tue, wed, thu = "Thu"] = days();

console.log(mon, tue, wed, thu); // Mon Tue Wed Thu
