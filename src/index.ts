import { User } from "./models/User";

const user = new User({ name: "myName", age: 20 });

user.on("change", () => {});
user.on("change", () => {});
user.on("checkClick", () => {});

console.log(user);
