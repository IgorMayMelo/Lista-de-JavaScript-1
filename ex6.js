let periodo = prompt('Digite seu turno: Noturno, Vespertino ou Matutino')

if (periodo == 'Matutino') {
    console.log('Bom Dia!')
}
else if (periodo == 'Vespertino'){
    console.log('Boa Tarde!')
}
else if (periodo == 'Noturno'){
    console.log('Boa Noite!')
}
else {
    console.log('Valor Inválido, recarregue a página e escreva novamente')
}