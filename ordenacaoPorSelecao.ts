function buscarMenor(array: any[]) {
	let menor = array[0]
	let menorIndice = 0

	for (const i in array) {
		if (array[i] < menor) {
			menor = array[i]
			menorIndice = Number(i)
		}
	}

	return menorIndice
}

function ordernacaoPorSelecao(array: any[]) {
	const novoArray: any[] = []

	for (const i in array) {
		const menor = buscarMenor(array)
		novoArray.push(array.splice(menor, 1)[0])
	}

	// for (const _ in velhoArray) {
	// 	const menor = buscarMenor(velhoArray)
	//    velhoArray.pop()

	// 	novoArr.push(velhoArray.splice(menor, 1)[0])
	// }

	return novoArray
}

console.log(buscarMenor([5, 3, 6, 2, 10]))
console.log(ordernacaoPorSelecao([5, 3, 6, 2, 10]))
