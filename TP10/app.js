let utiles = ["Lápiz", "Goma", "Regla", "Cuaderno", "Lapicera"];


console.log(utiles);
console.log(utiles[0]);
console.log(utiles[2]);
console.log(utiles[utiles.length - 1]);
console.log(utiles.length);


utiles.push("Mochila");


console.log(utiles);


utiles.unshift("Cartuchera");


console.log(utiles);
console.log(utiles.length);


let eliminadoFinal = utiles.pop();


console.log(eliminadoFinal);
console.log(utiles);


let eliminadoInicio = utiles.shift();


console.log(eliminadoInicio);
console.log(utiles);
console.log(utiles.length);


let productos = ["Leche", "Pan", "Arroz", "Fideos", "Aceite"];


console.log(productos);
console.log(productos.length);


productos.push("Azúcar");
productos.push("Yerba");
productos.push("Café");


console.log(productos);


productos.unshift("Sal");
productos.unshift("Galletitas");


console.log(productos);
console.log(productos.length);


let eliminado1 = productos.pop();


console.log(eliminado1);


let eliminado2 = productos.pop();


console.log(eliminado2);
console.log(productos);


let eliminado3 = productos.shift();


console.log(eliminado3);
console.log(productos);
console.log(productos.length);


let productos2 = ["Teclado", "Mouse", "Monitor", "Auriculares", "Webcam", "Parlantes"];


console.log(productos2.indexOf("Mouse"));
console.log(productos2.indexOf("Monitor"));
console.log(productos2.indexOf("Webcam"));
console.log(productos2.indexOf("Impresora"));


let teclado = productos2.indexOf("Teclado");
if (teclado !== -1) {


    console.log("El teclado está registrado");


} else {


    console.log("El teclado no está registrado");


}
let impresora = productos2.indexOf("Impresora");


if (impresora !== -1) {
    console.log("La impresora está registrada");
} else {
    console.log("La impresora no está registrada");
}
productos2.push("Impresora");


console.log(productos2.indexOf("Impresora"));
console.log(productos2.length);


let videojuegos = ["Minecraft", "Pokémon Cristal", "Super Mario", "The Legend of Zelda", "Sonic"];


console.log(videojuegos);
console.log(videojuegos.length);


videojuegos.push("Animal Crossing");
videojuegos.push("Pokémon Rojo");


console.log(videojuegos);


videojuegos.unshift("Tetris");
videojuegos.unshift("Pac-Man");


console.log(videojuegos);
console.log(videojuegos.indexOf("Pokémon Cristal"));
console.log(videojuegos.indexOf("Sonic"));
console.log(videojuegos.indexOf("FIFA"));


let eliminado4 = videojuegos.pop();


console.log(eliminado4);


let eliminado5 = videojuegos.shift();


console.log(eliminado5);
console.log(videojuegos);
console.log(videojuegos.length);


let estudiantes = ["Martina", "Lucas", "Sofía", "Tomás", "Valentina"];


console.log(estudiantes);
console.log(estudiantes.length);


estudiantes.push("Agustín");
estudiantes.push("Camila");


console.log(estudiantes);


estudiantes.unshift("Bruno");


console.log(estudiantes);
console.log(estudiantes.length);
console.log(estudiantes.indexOf("Sofía"));
console.log(estudiantes.indexOf("Camila"));
console.log(estudiantes.indexOf("Federico"));


let eliminado6 = estudiantes.shift();


console.log(eliminado6);


let eliminado7 = estudiantes.pop();


console.log(eliminado7);
console.log(estudiantes);
console.log(estudiantes.length);


let tareas = ["Estudiar", "Hacer la tarea", "Ordenar la habitación", "Comprar alimentos"];


console.log(tareas);
console.log(tareas.length);


tareas.push("Pasear al perro");
tareas.push("Preparar la cena");


console.log(tareas);


tareas.unshift("Entregar un trabajo");


console.log(tareas);
console.log(tareas.indexOf("Estudiar"));
console.log(tareas.indexOf("Preparar la cena"));
console.log(tareas.indexOf("Lavar el auto"));


let eliminado8 = tareas.shift();


console.log(eliminado8);


let eliminado9 = tareas.pop();


console.log(eliminado9);


tareas.push("Leer un libro");
tareas.unshift("Hacer ejercicio");


console.log(tareas);
console.log(tareas.length);


let peliculas = ["Toy Story", "Shrek", "Buscando a Nemo", "Los Increíbles", "Ratatouille"];


console.log(peliculas);
console.log(peliculas.length);


peliculas.push("Cars");
peliculas.push("Monsters, Inc.");


console.log(peliculas);


peliculas.unshift("Intensamente");
peliculas.unshift("Coco");


console.log(peliculas);
console.log(peliculas.indexOf("Shrek"));
console.log(peliculas.indexOf("Coco"));
console.log(peliculas.indexOf("Frozen"));


let cars = peliculas.indexOf("Cars");
if (cars !== -1) {
    console.log("Cars está en la lista");
} else {
    console.log("Cars no está en la lista");
}


let eliminado10 = peliculas.pop();


console.log(eliminado10);


let eliminado11 = peliculas.shift();


console.log(eliminado11);
peliculas.push("Up");


console.log(peliculas.indexOf("Up"));
console.log(peliculas);
console.log(peliculas.length);


let productosTienda = ["Celular", "Notebook", "Tablet", "Teclado", "Mouse"];


console.log(productosTienda);
console.log(productosTienda.length);


productosTienda.push("Monitor");
productosTienda.push("Impresora");
productosTienda.unshift("Cámara web");
productosTienda.unshift("Micrófono");


console.log(productosTienda);
console.log(productosTienda.length);
console.log(productosTienda.indexOf("Notebook"));
console.log(productosTienda.indexOf("Micrófono"));
console.log(productosTienda.indexOf("Parlantes"));


let eliminado12 = productosTienda.pop();


console.log(eliminado12);


let eliminado13 = productosTienda.shift();


console.log(eliminado13);
console.log(productosTienda);


productosTienda.push("Parlantes");
productosTienda.unshift("Auriculares");


console.log(productosTienda);
console.log(productosTienda.indexOf("Parlantes"));
console.log(productosTienda.indexOf("Auriculares"));
console.log(productosTienda.indexOf("Celular"));


let eliminado14 = productosTienda.pop();


console.log(eliminado14);


let eliminado15 = productosTienda.shift();


console.log(eliminado15);
console.log(productosTienda);
console.log(productosTienda.length);
