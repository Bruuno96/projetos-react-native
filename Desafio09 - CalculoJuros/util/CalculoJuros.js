const calcularJurosSimples = (valor, meses, taxa) => {
  return valor +  (valor * (taxa / 100) * meses);
}

const calcularJurosCompostos = (valor, meses, taxa) => {
  return valor * (1 + taxa / 100) ** meses;
}

export {calcularJurosCompostos, calcularJurosSimples}