class Producto {
    //Inicializamos las propiedades
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    //Creamos nuestro método
    mostrarDetalles() {
        return `${this.nombre} cuesta Q${this.precio}`;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }
    //Método para agregar producto
    agregarProducto(producto) {
        this.productos.push(producto)
    }

    //Método para calcular el total
    calcularTotal() {
        return this.productos.reduce((total, pre) => total + pre.precio, 0);
    }

    //Método para mostrar en lista los productos
    listarProductos() {
        return this.productos.map(pre => `<li> ${pre.mostrarDetalles()} </li>`).join('');
    }
}

const productosDisponibles = [
    new Producto(1, "Remodelacion de sala", 4000),
    new Producto(2, "Remodelacion de cocina", 5000),
    new Producto(3, "Instalacion de LED", 1500),
    new Producto(4, "Renovacion de jardin", 3000),
    new Producto(5, "Instalacion de A/C por cuarto", 1000),
    new Producto(6, "Instalacion de audio", 5000),
];

const carrito = new Carrito();

//Crear función
function agregarAlCarrito(id) {
    const producto = productosDisponibles.find(pre => pre.id === id);
    carrito.agregarProducto(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    document.getElementById("lista-productos").innerHTML = carrito.listarProductos();
    document.getElementById("total").textContent = carrito.calcularTotal();
}