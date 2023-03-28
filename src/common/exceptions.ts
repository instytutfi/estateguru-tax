class CalculationError extends Error {
  title: string

  constructor (title: string, message: string) {
    super(message)
    this.title = title
    this.name = 'CalculationError'
  }
}

export {
  CalculationError
}
