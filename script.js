const MAX_RADIUS = 20;
const MIN_RADIUS = 0;
const typePast = JSON.parse(localStorage.getItem("myKey"));

const firstLineKeys = {
  ruSmall: ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ruShift: ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
  ruShiftCaps: ["ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
  ruCaps: ["Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  enCaps: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  enSmall: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  enShift: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
  enShiftCaps: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
  name: "firstLine",
};

const secondLineKeys = {
  ruSmall: ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
  ruShift: ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del"],
  ruShiftCaps: ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/", "Del"],
  ruCaps: ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del"],
  enSmall: ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
  enShift: ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del"],
  enShiftCaps: ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "|", "Del"],
  enCaps: ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del"],
  name: "secondLine",
};

const thirdLineKeys = {
  ruSmall: ["CapsLk", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
  ruShift: ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
  ruShiftCaps: ["CapsLk", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
  ruCaps: ["CapsLk", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
  enSmall: ["CapsLk", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  enShift: ["CapsLk", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter"],
  enShiftCaps: ["CapsLk", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "\"", "Enter"],
  enCaps: ["CapsLk", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
  name: "thirdLine",
};

const forthLineKeys = {
  ruSmall: ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
  ruShift: ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift"],
  ruShiftCaps: ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "▲", "Shift"],
  ruCaps: ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "▲", "Shift"],
  enSmall: ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
  enShift: ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift"],
  enShiftCaps: ["Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "▲", "Shift"],
  enCaps: ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "▲", "Shift"],
  name: "forthLine",
};

const fifthLineKeys = {
  ruSmall: ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"],
  name: "fifthLine",
};

let textLanguage = document.createElement("p");
textLanguage.innerText = "Клавиатура создана в операционной системе Windows\nКнопки для смены языка: ctrl+alt";

let textInput = document.createElement("textarea");
textInput.classList.add("text-input");

let wrapper = document.createElement("div");
wrapper.classList.add("key-wrapper");

let arrayLines = [];
let arrayLinesKeys = [firstLineKeys, secondLineKeys, thirdLineKeys, forthLineKeys, fifthLineKeys];

function addElement(element, place) {
  place.append(element);
}

addElement(textLanguage, document.body);
addElement(textInput, document.body);
addElement(wrapper, document.body);
for (let i = 0; i < 5; i++) {
  let line = document.createElement("div");
  line.classList.add("line");
  arrayLines.push(line);
  addElement(arrayLines[i], wrapper);
}

let type = "ruSmall";
function createRow() {
  for (let j = 0; j < arrayLinesKeys.length; j++) {
    let keys = arrayLinesKeys[j][type];
    for (let i = 0; i < keys.length; i++) {
      let button = document.createElement("button");
      button.classList.add("button-small");
      button.innerText = keys[i];
      addElement(button, arrayLines[j]);
    }
  }
}
createRow();

if (typePast) {
  if (typePast[0] === "e") {
    type = "enSmall";
  } else if (typePast[0] === "r") {
    type = "ruSmall";
  }
}

function change() {
  const save = JSON.stringify(type);
  localStorage.setItem("myKey", save);
  for (let j = 0; j < arrayLinesKeys.length; j++) {
    if (arrayLinesKeys[j][type] !== undefined) {
      let keys = arrayLinesKeys[j][type];
      for (let i = 0; i < keys.length; i++) {
        arrayLines[j].children[i].innerText = keys[i];
      }
    }
  }
}
change();

arrayLines[0].children[13].classList.add("flexBtn");
arrayLines[1].children[0].classList.add("flexBtn");
arrayLines[1].children[14].classList.add("flexBtn");
arrayLines[2].children[0].classList.add("flexBtn");
arrayLines[2].children[12].classList.add("flexBtn");
arrayLines[2].children[12].id = "Enter";
arrayLines[3].children[0].classList.add("flexBtn");
arrayLines[3].children[11].classList.add("arrowUp");
arrayLines[3].children[12].classList.add("flexBtn");

for (let i = 0; i < 10; i++) {
  if (i !== 3 && i < 9) {
    arrayLines[4].children[i].classList.add("littleBtn");
  }
}
arrayLines[4].children[3].classList.add("space");
let deleteButton = arrayLines[1].children[14];
let shiftLeftButton = arrayLines[3].children[0];
let shiftRightButton = arrayLines[3].children[12];
let controlLeftButton = arrayLines[4].children[0];
arrayLines[4].children[0].classList.add('smallFont');
let controlRightButton = arrayLines[4].children[8];
arrayLines[4].children[8].classList.add("smallFont");
let altLeftButton = arrayLines[4].children[2];
arrayLines[4].children[2].classList.add("smallFont");
let altRightButton = arrayLines[4].children[4];
arrayLines[4].children[4].classList.add("smallFont");
let winButton = arrayLines[4].children[1];
arrayLines[4].children[1].classList.add("smallFont");
let spaceButton = arrayLines[4].children[3];
let arrowUpButton = arrayLines[3].children[11];
let arrowLeftButton = arrayLines[4].children[5];
let arrowDownButton = arrayLines[4].children[6];
let arrowRightButton = arrayLines[4].children[7];
let capsLockButton = arrayLines[2].children[0];

let checkAnimation = 0;
let checkElem = {};

function animationDown(e) {
  if (!checkAnimation || checkElem[e.innerText] === undefined) {
    checkElem[e.innerText] = 1;
    let radius = MIN_RADIUS;
    setInterval(() => {
      radius = +radius;
      if (radius < MAX_RADIUS) {
        radius += 1; e.style.borderRadius = `${radius}px`;
      }
    }, 5);
    checkAnimation = 1;
  }
}

function animationUp(e) {
  checkAnimation = 0;
  delete checkElem[e.innerText];
  if (e.className !== "key-wrapper") {
    let radius = MAX_RADIUS;
    let interval = setInterval(() => {
      radius = +radius;
      if (radius > MIN_RADIUS) {
        radius -= 1; e.style.borderRadius = `${radius}px`;
      } else {
        e.style.borderRadius = "";
        clearInterval(interval);
      }
    }, 5);
  }
}

function capsLock() {
  switch (type) {
    case "ruSmall":
      type = "ruCaps";
      capsLockButton.classList.add("active");
      animationDown(capsLockButton);
      break;
    case "enSmall":
      type = "enCaps";
      capsLockButton.classList.add("active");
      animationDown(capsLockButton);
      break;
    case "ruCaps":
      type = "ruSmall";
      capsLockButton.classList.remove("active");
      animationUp(capsLockButton);
      break;
    default:
      type = "enSmall";
      capsLockButton.classList.remove("active");
      animationUp(capsLockButton);
  }
  change();
}

let checkButtons = ["key-wrapper", "line", "Shift", "Ctrl", "Alt", "Win"];
wrapper.addEventListener("click", (e) => {
  let buttonClassName = e.target.className;
  let buttonInnerText = e.target.innerText;
  if (!checkButtons.includes(buttonClassName) && !checkButtons.includes(buttonInnerText)) {
    textInput.focus();
    switch (buttonInnerText) {
      case "":
        textInput.setRangeText(" ", textInput.selectionStart, textInput.selectionEnd, "end");
        break;
      case "Tab":
        textInput.setRangeText("    ", textInput.selectionStart, textInput.selectionEnd, "end");
        break;
      case "Backspace":
        if (textInput.selectionStart > 0)textInput.setRangeText("", textInput.selectionStart - 1, textInput.selectionEnd, "end");
        break;
      case "Del":
        textInput.setRangeText("", textInput.selectionStart, textInput.selectionEnd + 1, "end");
        break;
      case "Enter":
        textInput.setRangeText("\n", textInput.selectionStart, textInput.selectionEnd, "end");
        break;
      case "CapsLock":
        capsLock();
        break;
      default:
        textInput.setRangeText(buttonInnerText, textInput.selectionStart, textInput.selectionEnd, "end");
    }
  }
});

function buttonDown(e) {
  if (e !== undefined) {
    e.click();
    if (e.className !== "key-wrapper") {
      animationDown(e);
      e.classList.add("active");
    }
  }
}

function buttonUp(e) {
  if (e !== undefined) {
    animationUp(e);
    e.classList.remove("active");
  }
}

let checkShiftUp = 1; // проверка нажата ли кнопка shift

function shiftDown() {
  if (checkShiftUp) {
    checkShiftUp = 0;
    switch (type) {
      case "ruSmall":
        type = "ruShift";
        break;
      case "enSmall":
        type = "enShift";
        break;
      case "ruCaps":
        type = "ruShiftCaps";
        break;
      default:
        type = "enShiftCaps";
    }
    change();
  }
}

function shiftUp() {
  checkShiftUp = 1;
  switch (type) {
    case "ruShift":
      type = "ruSmall";
      break;
    case "enShift":
      type = "enSmall";
      break;
    case "ruShiftCaps":
      type = "ruCaps";
      break;
    default:
      type = "enCaps";
  }
  change();
}

wrapper.addEventListener("mousedown", (e) => {
  textInput.focus();
  let buttonClassName = e.target.className;
  let buttonInnerText = e.target.innerText;
  if (buttonClassName !== "key-wrapper" && buttonClassName !== "line") {
    e.target.classList.add("active");
    if (buttonInnerText !== "CapsLock") {
      animationDown(e.target);
      if (buttonInnerText === "Shift") {
        shiftDown();
        e.target.classList.add("active");
      }
    }
  }
});

wrapper.addEventListener("mouseup", (e) => {
  let buttonClassName = e.target.className;
  let buttonInnerText = e.target.innerText;
  if (buttonClassName !== "key-wrapper" && buttonClassName !== "line" && buttonInnerText !== "CapsLock") {
    e.target.classList.remove("active");
    animationUp(e.target);
    if (buttonInnerText === "Shift") {
      shiftUp();
      e.target.classList.remove("active");
      change();
    }
  }
});

wrapper.addEventListener("mouseout", (e) => {
  let buttonClassName = e.target.className;
  let buttonInnerText = e.target.innerText;
  if (buttonClassName.indexOf("active") !== -1) {
    if (buttonClassName !== "key-wrapper" && buttonClassName !== "line" && buttonInnerText !== "CapsLock") {
      if (buttonInnerText === "Shift") {
        shiftUp();
      }
      e.target.classList.remove("active");
      animationUp(e.target);
    }
  }
});

let checkCaps = 1; // проверка нажата ли кнопка CapsLock
let checkChange = 1; // проверка нажаты ли кнопки для смены языка
let checkCtrl = 0; // проверка нажата ли кнопка ctrl
let checkAlt = 0; // проверка нажата ли кнопка alt

function changeLanguage() {
  if (checkCtrl && checkAlt && checkChange) {
    checkChange = 0;
    if (type[0] === "r") {
      type = (`en${type.slice(2)}`);
    } else {
      type = (`ru${type.slice(2)}`);
    }
    change();
  }
}

function findOtherButton(key) {
  let saveType = type;
  if (type[0] !== "e") {
    type = (`en${type.slice(2)}`);
    change();
  }
  for (let i = 0; i < arrayLines.length; i++) {
    for (let j = 0; j < arrayLines[i].children.length; j++) {
      if (key === arrayLines[i].children[j].innerText) {
        type = saveType;
        change();
        return arrayLines[i].children[j];
      }
    }
  }
}

function findButton(code, key) {
  switch (code) {
    case "ShiftLeft":
      return shiftLeftButton;
    case "ShiftRight":
      return shiftRightButton;
    case "Space":
      return spaceButton;
    case "Delete":
      return deleteButton;
    case "ControlLeft":
      return controlLeftButton;
    case "ControlRight":
      return controlRightButton;
    case "AltRight":
      return altRightButton;
    case "AltLeft":
      return altLeftButton;
    case "MetaLeft":
      return winButton;
    case "CapsLock":
      return wrapper;
    case "ArrowUp":
      return arrowUpButton;
    case "ArrowLeft":
      return arrowLeftButton;
    case "ArrowDown":
      return arrowDownButton;
    case "ArrowRight":
      return arrowRightButton;
    default:
      return findOtherButton(key);
  }
}

function checkCapsLock() {
  if (checkCaps) {
    checkCaps = 0;
    capsLock();
  }
}

let keydown = (e) => {
  e.preventDefault();
  switch (e.code) {
    case "ShiftLeft":
      shiftDown();
      break;
    case "ShiftRight":
      shiftDown();
      break;
    case "CapsLock":
      checkCapsLock();
      break;
    case "ControlLeft":
      checkCtrl = 1;
      break;
    case "ControlRight":
      checkCtrl = 1;
      break;
    case "AltRight":
      checkAlt = 1;
      break;
    case "AltLeft":
      checkAlt = 1;
      break;
    default:
  }
  changeLanguage();
  buttonDown(findButton(e.code, e.key));
};

let keyup = (e) => {
  e.preventDefault();
  switch (e.code) {
    case "ShiftLeft":
      shiftUp();
      break;
    case "ShiftRight":
      shiftUp();
      break;
    case "CapsLock":
      checkCaps = 1;
      break;
    case "ControlLeft":
      checkCtrl = 0;
      break;
    case "ControlRight":
      checkCtrl = 0;
      break;
    case "AltRight":
      checkAlt = 0;
      break;
    case "AltLeft":
      checkAlt = 0;
      break;
    default:
  }
  buttonUp(findButton(e.code, e.key));
  checkChange = 1;
};

document.addEventListener("keyup", keyup);
document.addEventListener("keydown", keydown);