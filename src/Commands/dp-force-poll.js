const { PollLayoutType } = require("discord.js");

const Command = {
  data: {
    name: "dp-force-poll",
    description: "Forces a poll in the current channel.",
  },
  run: async function (interaction, client) {
    interaction.channel.send({
      poll: {
        question: { text: "Test" },
        answers: [ { text: "Test 1", emoji: "🍎" }, { text: "Test 2", emoji: "🍎" }, { text: "Test 3", emoji: "🍎" } ],
        alloweMultiselect: false,
        duration: 2,
        layoutType: PollLayoutType.Default
      }
    });
  }
};

module.exports = Command;