import {  NotFound } from "../../../src/domain/erros";




describe('AlreadyExistsError', () => {
  it('Espero que retorne a message correcta do erro assim que instaciar a class AlreadyExistsError', () => {
    const sut = new NotFound('any');

    expect(sut.message).toBe('any is not found')
  })
  
  it('Espero que retorne o name correcto assim que instaciar a class AlreadyExistsError', () => {
    const sut = new NotFound('any');

    expect(sut.name).toBe('NotFound')
  })
 })
