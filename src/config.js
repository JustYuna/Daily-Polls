module.exports = {
  memory_debug: false,
  memory_limit: 1024,
  messages: {
    command_error_not_allowed: "You are not allowd to use this command.",
    command_error_unable_to_use: "This command is currently unavailable.",
    command_error_process: "Command error while executing."
  },
  polls: [
    { question: "What soop would you rather eat?", answers: [ "Tomato Soup", "Mushroom soup", "Green glowing soup", "Salty Soup" ]  },
    { question: "Chose a whimsical pet", asnwers: [ "Unicorn", "Dragon", "Fairies", "9 Tailed fox" ] }
  ]
};