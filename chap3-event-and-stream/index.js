import EventEmitter from "events";

const myEvent = new EventEmitter();

// function handleEvent(message) {
//   console.log(message, "event 1");
// }

// myEvent.on("has-message", handleEvent);

// myEvent.on("has-message", (message) => {
//   console.log(message, "event 2");
// });

// myEvent.emit("has-message", "Ping!!!!");
// // Unsubcribe event 1
// myEvent.off("has-message", handleEvent);
// myEvent.emit("has-message", "Ping!!!!");

// // Đăng ký event khi có error
// myEvent.on("error", () => {
//   console.log("has error");
// });

// myEvent.emit("error", new Error("fake error"));
// console.log("Next line after error");

setTimeout(() => {
  console.log("Execute after 5s...");
}, 5000);

process.on("SIGINT", () => {
  console.log("Exit process!!!!");
});
