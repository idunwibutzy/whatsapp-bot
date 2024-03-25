module.exports = {
  name: "mod",
  aliases: "modulus",
  category: "tools",
  code: async (ctx) => {
    var numbers = ctx._args
    let result = []
    const divisor = 27
    let x = ""
    numbers.forEach( mod => {
        x = mod % 27
        if(x < 0){
            x += divisor
        }
        result += x + " "
    })
    return ctx.reply(result)
  },
};
