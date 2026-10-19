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
      ],
      multi: false
    },
    {
      question: "Chose a whimsical pet",
      asnwers: [
        { text: "Unicorn", emoji: "🦄" },
        { text: "Fairies", emoji: "🧚" },
        { text: "Dragon", emoji: "🐲" },
        { text: "9 Tailed fox", emoji: "🦊" },
        { text: "Talking radioactive glibber", emoji: "🩻" }
      ],
      multi: false
    },
    {
      question: "Tom or Jerry?",
      asnwers: [
        { text: "Tom", emoji: "😺" },
        { text: "Jerry", emoji: "🐭" }
      ],
      multi: false
    },
    {
      question: "Garfield or Odie?",
      asnwers: [
        { text: "Garfield", emoji: "😺" },
        { text: "Odie", emoji: "🐶" }
      ],
      multi: false
    },
    {
      question: "What time format do you prefer?",
      asnwers: [
        { text: "24hr", emoji: "🕰️" },
        { text: "12hr", emoji: "🕰️" },
      ],
      multi: false
    },
    {
      question: "Do you like the minecraft movie?",
      asnwers: [
        { text: "Yes", emoji: "🟩" },
        { text: "No", emoji: "🟥" },
        { text: "Its not even minecraft, its real life", emoji: "⁉️" }
      ],
      multi: false
    },
    {
      question: "Choose a super power",
      asnwers: [
        { text: "Power of flight", emoji: "🪽" },
        { text: "Power of invibility", emoji: "👻" },
        { text: "Power of instant healing", emoji: "😇" },
        { text: "Power of being radioactive", emoji: "🩻" }
      ],
      multi: false
    }
  ]
};