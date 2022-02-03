export class ServerError extends Error {
  constructor (error?: string) {
//    super('Server failed. Try again soon')
    super(error || 'Server failed. Try again soon')
    this.name = 'ServerError'
    //this.stack = error?.stack
  }
}

export class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
  }
}

export class ForbiddenError extends Error {
  constructor () {
    super('Access denied')
    this.name = 'ForbiddenError'
  }
}
