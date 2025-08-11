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
  if (cnt >= 2) myImage.onclick = null;
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
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
