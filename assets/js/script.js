
const fd = document.getElementById('f-d')




fd.addEventListener('submit', function(e) {

    e.preventDefault();

    
const valorA = Number(document.getElementById('a').value)
const valorB= Number(document.getElementById('b').value)
    

if(valorB > valorA) {
    const greenBg = document.getElementById('dashb').style.background = '#0c9718'
    const whiteC = document.getElementById('dashb').style.color = '#fff'
    alert('Valor válido, você poderá financiar!')


 
   
}
else {

    alert('Valor Inválido')
}
   

}
)

