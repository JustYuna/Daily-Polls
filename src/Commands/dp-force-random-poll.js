const { PollLayoutType } = require("discord.js");
const { choose } = require("../helper");
const config = require("../config");

const Command = {
  data: {
    name: "dp-force-random-poll",
    description: "Forces a random poll in the current channel.",
  },
  run: async function (interaction, client) {
    var poll = choose(config.polls);
    var data = {
      question: { text: poll.question },
      answers: poll.answers,
      alloweMultiselect: false,
      duration: 3,
      layoutType: PollLayoutType.Default
    };
    
    interaction.channel.send({ poll: data });
  }
}; 

module.exports = Command;