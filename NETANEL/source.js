let temp = 1;
let id = 0;
const allVictory = [
  [1, 2, 3],
  [1, 4, 7],
  [7, 8, 9],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3],
  [2, 5, 8],
  [4, 5, 6],
];
let allBoxes_x = [];
let allBoxes_o = [];

function init() {
  createBoxes();
  clicks();
}
function createBoxes() {
  for (let i = 0; i < 9; i++) {
    let newBox = makeBox();
    newBox.addToHtml();
  }
}
function clicks() {
  const boxes = document.getElementsByClassName("blocks");
  for (let box of boxes) {
    box.addEventListener("click", (e) => {
      click(e.target);
    });
  }
}

function click(boxDiv) {
  let boxImg = document.createElement("img");
  boxImg.className = "img";
  if (boxDiv.hasChildNodes()) {
  } else {
    if (temp % 2 === 1) {
      boxImg.src = "./images/x.png";
      allBoxes_x.push(parseInt(boxDiv.id));
    } else {
      boxImg.src = "./images/o.png";
      allBoxes_o.push(parseInt(boxDiv.id));
    }
    boxDiv.appendChild(boxImg);
    if (victory(allBoxes_o)) {
      alert("o wins");
      return;
    }
    if (victory(allBoxes_x)) {
      alert("x wins");
      return;
    }
    if (temp === 9) {
      alert("no one won");
      return;
    }
    temp++;
  }
}
function makeBox() {
  return {
    o_image: "./images/o.png",
    x_image: "./images/x.png",
    addToHtml: function () {
      let boxDiv = document.createElement("div");
      boxDiv.className = "box";
      boxDiv.id = ++id;
      id_blocks.appendChild(boxDiv);
    },
  };
}
function victory(numbers) {
  for (let arr of allVictory) {
    if (
      numbers.includes(arr[0]) &&
      numbers.includes(arr[1]) &&
      numbers.includes(arr[2])
    ) {
      return true;
    }
  }
  return false;
}
clicks();
