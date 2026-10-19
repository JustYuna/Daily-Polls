module.exports = {
  memory_debug: false,
  memory_limit: 1024,
  messages: {
    command_error_not_allowed: "You are not allowd to use this command.",
    command_error_unable_to_use: "This command is currently unavailable.",
    command_error_process: "Command error while executing."
  },
  polls: [
    {
      question: "What soop would you rather eat?",
      answers: [
        { text: "Tomato Soup", emoji: "🍅" },
        { text: "Mushroom Soup", emoji: "🍄" },
        { text: "Salty Soup", emoji: "🧂" },
        { text: "Fish Soup", emoji: "🐡" },
        { text: "Radioactive Soup", emoji: "🩻" }
    ]},
    {
      question: "Chose a whimsical pet",
      asnwers: [
        { text: "Unicorn", emoji: "🦄" },
        { text: "Fairies", emoji: "🧚" },
        { text: "Dragon", emoji: "🐲" },
        { text: "9 Tailed fox", emoji: "🦊" },
        { text: "Talking radioactive glibber", emoji: "🩻" }
      ]}
  ]
};