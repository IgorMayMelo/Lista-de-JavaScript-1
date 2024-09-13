function refazer(){
let nome = prompt('Coloque seu nome')
let senha = prompt('Coloque sua senha')

while (senha === nome){
    console.log('A senha não pode ser igual ao nome')
    
    let nome = prompt('Coloque seu nome')
    let senha = prompt('Coloque sua senha')
break
}

console.log('Entrou com sucesso')
}
refazer();