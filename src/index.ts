import { InputHelper, Logger } from './utilities'
import flipPancakes from './flipPancakes'

;(async function revengeOfThePancakes() {
  const userInput = {
    numberOfTestCases: 1,
    cases: [],
  }

  await InputHelper.prompt().then((answer) => {
    const numberOfTestCases = parseInt(answer, 10)

    if (Number.isNaN(numberOfTestCases)) {
      Logger.error(
        "Couldn't parse number of test cases. Make sure you're entering a number."
      )
    }

    userInput.numberOfTestCases = numberOfTestCases
  })

  while (userInput.cases.length < userInput.numberOfTestCases) {
    await InputHelper.prompt().then((testCase) => {
      const validPancakeRegex = /^[+-]+$/

      if (!validPancakeRegex.test(testCase)) {
        Logger.error(
          "Test case inputs can't contain characters other than + or -"
        )
      }

      userInput.cases.push(testCase)
    })
  }

  InputHelper.close()

  userInput.cases.forEach((testCase, index) => {
    Logger.log(`Case #${index + 1}: ${flipPancakes(testCase)}`)
  })
})()
