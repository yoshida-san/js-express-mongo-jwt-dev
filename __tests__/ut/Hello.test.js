const Hello = require('../../src/functions/Hello')

describe('Greeting test', () => {
  const hello = new Hello()
  it('Greeting to Yoshida -> "Hello, Yoshida!"', () => {
    expect(hello.greeting('Yoshida')).toBe('Hello, Yoshida!')
  })
  it('Greeting to John -> "Hello, John!"', () => {
    expect(hello.greeting('John')).toBe('Hello, John!')
  })
  it('Greeting to "" -> "Hello...?"', () => {
    expect(hello.greeting('')).toBe('Hello...?')
  })
  it('Greeting to null -> "Hello...?"', () => {
    expect(hello.greeting(null)).toBe('Hello...?')
  })
  it('Greeting to undefined -> "Hello...?"', () => {
    expect(hello.greeting(undefined)).toBe('Hello...?')
  })
})
