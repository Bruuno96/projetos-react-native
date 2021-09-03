export function computar(dados) {
  let somaSuspeito = 0;
  let somaPositivo = 0;
  let somaNegativo = 0;

  dados.map((dado) => {
    let status = dado.statuscovid;
    if (status === "suspeito")
      somaSuspeito++;
    else if (status === "positivo")
      somaPositivo++;
    else
      somaNegativo++
  })

  return { somaSuspeito, somaPositivo, somaNegativo };
}