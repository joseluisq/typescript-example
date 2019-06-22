import { Calculator } from './caculator'

describe('Calculator Test Suite', () => {

  const { factorial } = new Calculator()

  test('factorial of 4 should be equal to 24', () => {
    expect(factorial(4)).toBe(24)
  })

})
