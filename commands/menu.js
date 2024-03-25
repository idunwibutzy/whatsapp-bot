const {bold} = require("@mengkodingan/ckptw")

module.exports = {
  name: "menu",
  category: "info",
  code: async (ctx) => {
    const img = await ctx._client.profilePictureUrl(ctx.id, "image");
    let text = "";
    const commandsMap = ctx._self.cmd;
    const tags = {
      main: "Main",
      ai: "AI",
      downloader: "Downloader",
      converter: "Converter",
      fun: "Fun",
      internet: "Internet",
      tools: "Tools",
      info: "Info",
      owner: "Owner",
      "": "No Category",
    };
    const sortedCategories = Object.keys(tags);
    for (const category of sortedCategories) {
      const categoryCommands = Array.from(commandsMap.values())
        .filter((command) => command.category === category)
        .map((command) => ({
          name: command.name,
          aliases: command.aliases,
        }));

      if (categoryCommands.length > 0) {
        text += `╭─「 ${bold(tags[category])} 」\n`;

        if (category === "main") {
          text += `│ • ${categoryCommands
            .map(
              (cmd) =>
                `${ctx._used.prefix || "/"}${cmd.name}${
                  cmd.aliases
                    ? `\n│ • ${cmd.aliases
                        .map((alias) => `${ctx._used.prefix || "/"}${alias}`)
                        .join("\n│ • ")}`
                    : ""
                }`
            )
            .join("\n│ • ")}\n`;
        } else {
          text += `│ • ${categoryCommands
            .map((cmd) => `${ctx._used.prefix || "/"}${cmd.name}`)
            .join("\n│ • ")}\n`;
        }

        text += `╰────\n\n`;
      }
    }

    return ctx.sendMessage(ctx.id, {
      text: text,
      contextInfo: {
        externalAdReply: {
          title: `Halo ${ctx._msg.pushName}`,
          body: "Kunjungi: https://github.com/arijsahmawan",
          thumbnailUrl: img,
          sourceUrl: "",
          mediaType: 1,
          renderLargerThumbnail: true,
        },
      },
    });
  },
};
