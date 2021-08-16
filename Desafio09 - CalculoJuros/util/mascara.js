function formatarMoeda(value) {
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

function formatarNumero(value) {
  // obtém somente os dígitos do value
  return value.replace(/\D/g, '');
}

export {formatarNumero, formatarMoeda};