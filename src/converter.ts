interface Codes {
  [key: string]: string;
}

const codes: Codes = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "&": ".-...",
  "'": ".----.",
  "@": ".--.-.",
  ")": "-.--.-",
  "(": "-.--.",
  ":": "---...",
  ",": "--..--",
  "=": "-....-",
  "!": "-.-.--",
  ".": ".-.-.-",
  "-": "-....-",
  "+": ".-.-.",
  '"': ".-..-.",
  "?": "..--..",
  "/": "-..-.",
};

export const encode = (text: string) => {
  let toReturn: string[] = [];
  for (let i = 0; i < text.split(" ").length; i++) {
    let toPush: string[] = text.split(" ")[i].split("");
    for (const item in toPush) toPush[item] = codes[toPush[item]];
    toReturn.push(toPush.join("   "));
  }
  return toReturn.join("      /      ");
};

export const decode = (morse: string) => {
  const _codes: Codes = { "/": " ", "|": " " },
    toReturn: string[] = morse.split(" ");
  for (const code in codes) _codes[codes[code]] = code;
  for (const item in toReturn)
    if (_codes[toReturn[item]]) toReturn[item] = _codes[toReturn[item]];
  return toReturn.join("");
};
