const fs = require("fs");

exports.listCmd = (msg, ctx) => {
  const prefixRegex = new RegExp(ctx._config.prefix, "i");
  const content = msg.content.trim();
  if (!prefixRegex.test(content)) return false;
  const [cmdName] = content.slice(1).trim().toLowerCase().split(/\s+/);
  for (const cmd of ctx._config.cmd.values()) {
    if (
      cmd.name === cmdName ||
      (cmd.aliases && cmd.aliases.includes(cmdName))
    ) {
      return true;
    }
  }
  return false;
};

exports.alphabetToNumber = (alp) => {
  let nArray = alp.split("");
  if (nArray.length % 2 === 1) {
    nArray.push("_");
  }
  var alphabet = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  function alpToNum(num, alp) {
    return alp.indexOf(num);
  }
  let x = [];
  nArray.forEach((result) => {
    x += alpToNum(result, alphabet) + " ";
  });
  return x;
};

exports.numberToAlphabet = (numbers) => {
  const arNum = numbers.split(" ");
  function num(numbers) {
    if (numbers == 0) {
      return "_";
    } else return String.fromCharCode(numbers + 64);
  }
  if (arNum.length % 2 === 1) {
    arNum.push("0");
  }
  let result = "";
  arNum.forEach((hasil) => {
    result += num(parseInt(hasil));
  });
  return result;
};
