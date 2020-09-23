function flipPancakes(s: string): number {
  const happyPancake = '+'
  const endsOnHappyPancake = s.charAt(s.length - 1) === happyPancake
  let flipCount = endsOnHappyPancake ? -1 : 0
  let currentGroupType = null

  for (let i = 0; i < s.length; i++) {
    if (currentGroupType !== s.charAt(i)) {
      flipCount++
      currentGroupType = s.charAt(i)
    }
  }

  return flipCount
}

export default flipPancakes
