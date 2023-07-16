const soma = (valores: number[]): number => (valores.length == 0 ? 0 : valores[0] + soma(valores.slice(1)))

console.log(soma([2, 4, 6]))
