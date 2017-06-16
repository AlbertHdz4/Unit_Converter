const expect = require('chai').expect;
const poundsToKilograms = require('..').poundsToKilograms;
const kilogramsToPounds = require('..').kilogramsToPounds;

describe('#unitconverter', function () {
  it('Recibe un arreglo de pesos en libras y devuelve un arreglo de esos pesos en kilogramos', function () {
    const result0 = poundsToKilograms(1).reduce((acum, array) => acum += array, 0);
    const result1 = poundsToKilograms(1, 2, 3, 4).reduce((acum, array) => acum += array, 0);
    expect(result0).to.equal(0.453592);
    expect(result1).to.equal(4.53592);
  })
})

describe('#unitconverter', function () {
  it('Recibe un arreglo de pesos en kilogramos y devuelve un arreglo de esos pesos en libras', function () {
    const result0 = kilogramsToPounds(1).reduce((acum, array) => acum += array, 0);
    const result1 = kilogramsToPounds(1, 2, 3, 4).reduce((acum, array) => acum += array, 0);
    expect(result0).to.equal(2.20462);
    expect(result1).to.equal(22.0462)
  })
})
