let b1= document.querySelector('#b1')
let b2= document.querySelector('#b2')
let b3= document.querySelector('#b3')
let b4= document.querySelector('#b4')
let b5= document.querySelector('#b5')
let b6= document.querySelector('#b6')
let p= document.querySelector('p')

b1.onclick = function() {
p.textContent='Este parrafo esta modificado'

}


b2.onclick = function() {
p.style.backgroundColor= 'blue'
}
    

b3.onclick = function() {
p.style.color='black'
}

        
b4.onclick = function() {
p.style.fontFamily= 'impact'
}


b5.onclick = function() {
    p.style.fontSize = '50px'
}
    
b6.onclick = function() {
 p.style.color = 'darkred'
 p.style.backgroundColor = 'rgb(248, 227, 230)'
 p.textContent = 'Este parrafo se puede modificar'
 p.style.fontFamily = 'Arial, Helvetica, sans-serif'
 p.style.fontSize = '20px'
}