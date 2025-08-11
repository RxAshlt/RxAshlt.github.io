const myImage = document.querySelector("img");
let cnt = 0;

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/img.png") {
    myImage.setAttribute("src", "images/img2.png");
  } else {
    myImage.setAttribute("src", "images/img.png");
  }
  ++cnt;
  console.log(`cnt = ${cnt}`);
  if (cnt >= 6) myImage.onclick = null;
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  // if (!myName) {
  //   setUserName(); // Prompt again if no name is entered
  // } else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
  // }/
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};

console.log(null);
const k = prompt("输入");
console.log(`空？${!k}`);
