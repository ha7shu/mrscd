interface keyable {
  [key: string]: string;
}

const codes: keyable = {
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

const letters: keyable = { "/": " ", "|": " " };
for (const code in codes) letters[codes[code]] = code;

export const encode = (input: string): string => {
  const toReturn: string[] = [];
  const text = input
    .toLowerCase()
    .split(" ")
    .filter((el) => el);

  for (let i = 0; i < text.length; i++) {
    let toPush: string[] = text[i].split("");

    for (const item in toPush) {
      if (!(toPush[item] in codes)) return toPush[item];
      toPush[item] = codes[toPush[item]];
    }

    toReturn.push(toPush.join("  "));
  }

  return toReturn.join("   /   ");
};

export const decode = (input: string) => {
  const toReturn: string[] = input.split(" ").filter((el) => el);
  for (const item in toReturn)
    if (letters[toReturn[item]]) toReturn[item] = letters[toReturn[item]];
  return toReturn.join("");
};
