let array = [];
let sliceOriginalArray;
let spliceOriginalArray;
let copyArray = true;

// Main input field
const input = document.getElementById("element-input");

// Main Array / Splice / Slice containers
const arrayElements = document.getElementById("arrayElements");

// Main array
const deleteArray = document.getElementById("delete-array");

// Splice Section
const first = document.getElementById("first-number");
const second = document.getElementById("second-number");
const third = document.getElementById("third-number");
const fourth = document.getElementById("fourth-number");
const splicedArrayDisplay = document.getElementById("spliced-array-display");
const spliceSection = document.getElementById("splice-section");
const deleteSpliceArray = document.getElementById("delete-splice-array");

// Slice Section
const sliceSection = document.getElementById("slice-section");
const slicedArrayDisplay = document.getElementById("sliced-array-display");
const deleteSliceArray = document.getElementById("delete-slice-array");

// All buttons
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[0].style.backgroundColor = "yellow";
  buttons[1].style.backgroundColor = "lightblue";
  buttons[2].style.backgroundColor = "red";
  buttons[3].style.backgroundColor = "red";
  buttons[4].style.backgroundColor = "orange";
  buttons[5].style.backgroundColor = "red";
  buttons[5].style.marginTop = "10px";
  buttons[6].style.backgroundColor = "orange";
  buttons[6].style.marginTop = "10px";
  buttons[6].style.color = "white";
  buttons[7].style.backgroundColor = "red";
  buttons[7].style.marginTop = "10px";
  buttons[8].style.backgroundColor = "lightgreen";
  buttons[9].style.backgroundColor = "lightgreen";
  buttons[9].style.color = "white";
  buttons[10].style.backgroundColor = "red";
  buttons[i].style.fontSize = "14px";
}

// delete arrays from DOM
deleteArray.addEventListener("click", () => {
  array = [];
  sliceOriginalArray = [];
  arrayElements.innerHTML = "";
  copyArray = true;
});

deleteSpliceArray.addEventListener("click", () => {
  spliceSection.innerHTML = "";
  splicedArrayDisplay.innerHTML = "";
});
deleteSliceArray.addEventListener("click", () => {
  sliceSection.innerHTML = "";
  slicedArrayDisplay.innerHTML = "";
  spliceOriginalArray = [];
});

function addLast() {
  if (!input.value) {
    alert("please fill in details");
  } else {
    let number = input.value;
    array.push(number);
    input.value = "";
    displayArray();
  }
}

function addFirst() {
  if (!input.value) {
    alert("please fill in details");
  } else {
    let number = input.value;
    array.unshift(number);
    console.log("n", number);

    input.value = "";
    displayArray();
  }
}
// function removeFirst() {
//   array.shift();
//   displayArray();
// }
// function removeLast() {
//   array.pop();
//   displayArray();
// }

// Remove First Element And Last Element From Array
function remove(position) {
  switch (position) {
    case "first":
      array.shift();
      break;
    case "last":
      array.pop();
      break;
  }
  displayArray();
}

// Splice Array
let isSpliceInstructionsDisplayed = false;
function spliceInstructionsButton() {
  let spliceInstructions = document.getElementById("splice-instructions");
  if (isSpliceInstructionsDisplayed == false) {
    spliceInstructions.classList.remove("splice-instructions-display");
    isSpliceInstructionsDisplayed = true;
  } else {
    spliceInstructions.classList.add("splice-instructions-display");
    isSpliceInstructionsDisplayed = false;
  }
}
function spliceArray() {
  if (!first.value || !second.value) {
    alert("please fill in details");
  } else if (array.length <= 0) {
    alert("The Array is Empty!");
  } else {
    copyArray = false;
    spliceSection.innerHTML = "";
    let firstNumber = first.value;
    let secondNumber = second.value;
    let thirdNumber = third.value;
    let fourthNumber = fourth.value;
    first.value = "";
    second.value = "";
    third.value = "";
    fourth.value = "";
    let spliceArray = array.slice();
    console.log("sa", spliceArray);
    if (!thirdNumber && !fourthNumber) {
      spliceArray.splice(firstNumber, secondNumber);
    } else if (!fourthNumber) {
      spliceArray.splice(firstNumber, secondNumber, thirdNumber);
    } else {
      spliceArray.splice(firstNumber, secondNumber, thirdNumber, fourthNumber);
    }
    displayArray();
    // const newArray = array;
    spliceArray.forEach((element, index, array) => {
      const elementDiv = document.createElement("div");
      elementDiv.innerHTML = `Index: ${index} Element: ${element} Array: ${array}`;
      elementDiv.classList.add("splice-highlight");
      spliceSection.appendChild(elementDiv);
    });
  }
}

// Slice Array

let isSliceInstructionsDisplayed = false;
function sliceInstructionsButton() {
  let sliceInstructions = document.getElementById("slice-instructions");
  if (isSliceInstructionsDisplayed == false) {
    sliceInstructions.classList.remove("slice-instructions-display");
    isSliceInstructionsDisplayed = true;
  } else {
    sliceInstructions.classList.add("slice-instructions-display");
    isSliceInstructionsDisplayed = false;
  }
}
function sliceArray() {
  copyArray = false;
  sliceSection.innerHTML = "";
  const startSlice = parseInt(document.getElementById("start-slice").value);
  const endSlice = parseInt(document.getElementById("end-slice").value);
  const start = document.getElementById("start-slice");
  const end = document.getElementById("end-slice");
  let newArray;
  if (!startSlice) {
    alert("please fill in details");
  } else {
    if (!endSlice) {
      newArray = spliceOriginalArray.slice(startSlice);
    } else {
      newArray = spliceOriginalArray.slice(startSlice, endSlice);
    }

    start.value = "";
    end.value = "";

    // let newArray = array.slice(startSlice, endSlice);
    // let newArray = spliceOriginalArray.slice(startSlice, endSlice);

    newArray.forEach((element, index, array) => {
      const elementDiv = document.createElement("div");
      elementDiv.textContent = `Index: ${index} Element: ${element} Array: ${array}`;
      elementDiv.classList.add("slice-highlight");
      sliceSection.appendChild(elementDiv);
    });
  }
}

// Display Array
function displayArray() {
  arrayElements.innerHTML = "";
  if (copyArray == true) {
    sliceOriginalArray = array.slice();
    spliceOriginalArray = array.slice();
  }

  splicedArrayDisplay.innerHTML = `Original Array: ${sliceOriginalArray}`;
  splicedArrayDisplay.style.backgroundColor = "yellow";
  splicedArrayDisplay.style.marginBottom = "10px";
  slicedArrayDisplay.innerHTML = `Original Array: ${spliceOriginalArray}`;
  slicedArrayDisplay.style.backgroundColor = "yellow";
  slicedArrayDisplay.style.marginBottom = "10px";
  if (copyArray == true) {
    array.forEach((element, index, array) => {
      const elementDiv = document.createElement("div");
      elementDiv.textContent = `Index: ${index} Element: ${element} Array: ${array}`;
      elementDiv.classList.add("array-highlight");
      arrayElements.appendChild(elementDiv);
    });
  } else {
    sliceOriginalArray.forEach((element, index, array) => {
      const elementDiv = document.createElement("div");
      elementDiv.textContent = `Index: ${index} Element: ${element} Array: ${array}`;
      elementDiv.classList.add("array-highlight");
      arrayElements.appendChild(elementDiv);
    });
  }
}
