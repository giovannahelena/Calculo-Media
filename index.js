function calc(){

    var n1, n2, media
    n1 = parseFloat(document.querySelector('#nota1').value);
    
    n2 = parseFloat(document.querySelector('#nota2').value);
    
    media = ((n1 + n2)/2);


if(media >= 7){
    document.querySelector('#t2').textContent = `Parabéns! Você foi aprovada com média ${media}!`;
}
else if(media >= 4){
    document.querySelector('#t2').textContent = `Média: ${media}. Estude para a recuperação.`;
}
else{
    document.querySelector('#t2').textContent = `Média: ${media}. Reprovado.`;
}

console.log(media);

}
