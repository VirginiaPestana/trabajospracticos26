let edad = 18
let ejercicio1 = document.querySelector('#p1')
let ejecutar1 = document.querySelector("#b1")

ejecutar1.onclick = function () {
    if (edad >= 18) {
        ejercicio1.textContent = 'Podes ingresar' 
    } else {
        ejercicio1.textContent = " No podes ingresar "
    }
}
let NombreUsuario = "Nahuel"
let ejercicio2 = document.querySelector("#p2")
let ejecutar2 = document.querySelector("#b2")

ejecutar2.onclick = function () {
    if (NombreUsuario == "Nahuel") {
        ejercicio2.textContent = "Bienvenido Nahuel"
    } else {
        ejercicio2.textContent = "Bienvenido Usuario"
    }
}
let ejercicio3 = document.querySelector("#p3")
let ejecutar3 = document.querySelector("#b3")

ejecutar3.onclick = function () {
    if ((NombreUsuario == "Nahuel") || (NombreUsuario == "Marcos")) {
        ejercicio3.textContent = " Bienvenido " + NombreUsuario + " ¿Como estas?"
    } else {
        ejercicio3.textContent = "Bienvenido usuario"
    }
}
let numero = 9
let ejecutar4 = document.querySelector("#b4")
let ejercicio4 = document.querySelector("#p4")

ejecutar4.onclick = function () {
    if (numero > 0) {
        ejercicio4.textContent = "El numero es positivo"
    } else if (numero == 0) {
        ejercicio4.textContent = "El numero es cero"
    } else {
        ejercicio4.textContent = "El numero es negativo"
    }
}
let Edad = 7
let ejecutar5 = document.querySelector("#b5")
let ejercicio5 = document.querySelector("#p5")

ejecutar5.onclick = function () {
    if ((Edad >= 6) && (Edad <= 11)) {
        ejercicio5.textContent = "Tu edad corresponde a un niño"
    } else if ((Edad >= 12) && (Edad <= 18)) {
        ejercicio5.textContent = " Tu edad corresponde a un adolescente"
    } else if ((Edad >= 19) && (Edad <= 26)) {
        ejercicio5.textContent = 'Tu edad corresponde a un joven'
    } else if ((Edad >= 27) && (Edad <= 59)) {
        ejercicio5.textContent = " Tu edad corresponde a un adulto"
    } else if (edad >= 60) {
        ejercicio5.textContent = " Tu edad corresponde a un anciano"
    } else {
        ejercicio5.textContent = " Edad no encontrada"
    }
}
let ejecutar7 = document.querySelector("#b7")
let ejercicio7 = document.querySelector("#p7")
let contraseña = "258036"

ejecutar7.onclick = function(){
    if (contraseña == "123456") {
        ejercicio7.textContent = "Acceso concedido"
    } else {
        ejercicio7.textContent = "Acceso denegado"
    }
}



