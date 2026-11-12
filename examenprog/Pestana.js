//Ejercicio1
/*
function verificar(nota,nombre) {
     let resultado 
    if (nota >= 6 ) {
      resultado = 'Hola' + nombre + 'aprobaste'
    } else {
      resultado = 'Hola' + nombre + 'no aprobaste'
    }
    return resultado
}
*/

//Ejercicio2
let productos = ['Fideos', 'Arroz', 'Pan']
let btn1 = document.querySelector ('#btnEJ2a')
let btn2 = document.querySelector ('#btnEJ2b')
let btn3 = document.querySelector ('#btnEJ2c')
let input = document.querySelector ('#inputEj2')

btn1.onclick = function(){
  productos.pop()
}


btn2.onclick = function(){
  productos.push(input.value)
}


btn3.onclick = function (){
  alert (productos)
}