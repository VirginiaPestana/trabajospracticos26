let b1= document.querySelector('#b1')
let b2= document.querySelector('#b2')
let b3= document.querySelector('#b3')
let b4= document.querySelector('#b4')
let b5= document.querySelector('#b5')
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
    p.style.width='10px'
    }
    