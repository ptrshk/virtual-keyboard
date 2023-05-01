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

