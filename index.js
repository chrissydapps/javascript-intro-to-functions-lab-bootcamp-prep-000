function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logshout(string) {
  console.log(shout(string))
}

function logwhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
  return `"I can't hear you!"`
  }
}

function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) {
  return `"YES INDEED!"`
  }
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
  return "I love you, too."
}
}
