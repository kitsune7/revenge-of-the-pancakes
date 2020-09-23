const standardInput = process.stdin
standardInput.setDefaultEncoding('utf-8')

export function prompt(question = ''): Promise<string> {
  return new Promise((resolve) => {
    process.stdout.write(question)
    standardInput.once('data', function processStandardInput(data) {
      const userInput = data.toString().trimEnd()
      resolve(userInput)
    })
  })
}

export function close(): void {
  standardInput.destroy()
}
