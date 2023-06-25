function pesquisaBinaria(array: any[], item: (typeof array)[0]) {
	let baixo = 0
	let alto = array.length - 1

	console.log('Item a ser pesquisado: ' + item)
	console.log('Maximo de tentativas: ' + Math.floor(Math.log2(array.length)))

	while (baixo <= alto) {
		console.log('baixo: ' + baixo + ' alto: ' + alto)
		let meio = Math.floor((baixo + alto) / 2)
		let chute = array[meio]

		console.log('meio: ' + meio + ' chute: ' + chute)

		if (chute == item) {
			console.log('Acertou!')
			return meio
		}

		if (chute > item) {
			console.log('Muito alto')
			alto = meio - 1
		} else {
			console.log('Muito baixo')
			baixo = meio + 1
		}
	}

	return null
}

pesquisaBinaria([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)

// Maximo de tentativas: log2(n)
// n = array.length

// n = 128 -> 7 tentativas
// n = 256 -> 8 tentativas
