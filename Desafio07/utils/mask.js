export default function formatCurrency(value) {
  // obtém somente os dígitos do value
  let digits = value.replace(/\D/g, '')
  if (digits.length < 3) {
    // atribui zeros a direita
    const zeros = '0'.repeat(3 - digits.length);
    digits = zeros + digits;
  }
  const decimalPosition = digits.length - 2;
  // ignora os zeros a direita e obtém os outros dígitos.
  const integerPart = digits.substring(0, decimalPosition).replace(/^0+([0-9]+)/, '$1');
  const decimalPart = digits.substring(decimalPosition);
  return integerPart + "." + decimalPart;
}


/*

  formatValue = (value) => {
    console.log(`Value = ${value}`);
    let digitos = value.replace(/\D/g, '')
    if (digitos.length < 3) {
      const zeros = '0'.repeat(3 - digitos.length)
      digitos = zeros + digitos
    }
    console.log(`Digitos = ${digitos}`)
    const posicaoDecimal = digitos.length - 2
    console.log(`Inteiro 1 = ${digitos.substring(0, posicaoDecimal)}`)
    const inteiro = digitos.substring(0, posicaoDecimal).replace(/^0+([0-9]+)/, '$1');
    console.log(`Inteiro = ${inteiro}`)
    const decimal = digitos.substring(posicaoDecimal)
    const valor = inteiro + "." + decimal
    return valor;
  }

*/