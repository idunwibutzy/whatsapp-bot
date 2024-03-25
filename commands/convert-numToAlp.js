const { alphabetToNumber, numberToAlphabet } = require("./../extra/library.js");

module.exports = {
  name: "cv",
  aliases: ["numtoalp", "alptonum"],
  code: async (ctx) => {
    var inputUser = ctx._args.join(" ");
    try {
      if (!isNaN(parseInt(inputUser))) {
        return ctx.reply(numberToAlphabet(inputUser))
      } else {
        inputUser = inputUser.toUpperCase();
        return ctx.reply(alphabetToNumber(inputUser))
      }
    } catch (err) {
      console.log(err);
      return ctx.reply(`*[ ! ]* ${err}`);
    }
  },
};
