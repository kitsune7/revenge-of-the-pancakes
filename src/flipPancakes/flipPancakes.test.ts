import flipPancakes from './flipPancakes'

describe('flipPancakes', () => {
  it('should pass the sample test cases from the problem spec', () => {
    expect(flipPancakes('-')).toBe(1)
    expect(flipPancakes('-+')).toBe(1)
    expect(flipPancakes('+-')).toBe(2)
    expect(flipPancakes('+++')).toBe(0)
    expect(flipPancakes('--+-')).toBe(3)
  })
})
