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
