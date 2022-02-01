import { AlreadyExistsError } from "../../../src/domain/erros";




describe('AlreadyExistsError', () => {
  it('Espero que retorne a message correcta do erro assim que instaciar a class AlreadyExistsError', () => {
    const sut = new AlreadyExistsError();

    expect(sut.message).toBe('already exists')
  })
  
  it('Espero que retorne o name correcto assim que instaciar a class AlreadyExistsError', () => {
    const sut = new AlreadyExistsError();

    expect(sut.name).toBe('AlreadyExistsError')
  })
 })
