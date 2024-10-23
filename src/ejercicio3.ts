// Interfaces
interface Producto {
    nombre: string;
    valor: number;
};

// Arreglo para almacenar la lista de productos
let productos: Producto[] = [];

// Función para agregar un producto a la lista
function agregarProducto(nombre: string, valor: number): void {
    const nuevoProducto: Producto = { nombre, valor }; // Crear un nuevo objeto producto
    productos.push(nuevoProducto); // Agregar el producto al arreglo
    console.log(`Producto agregado: ${nombre}, por un precio de: ${valor}`);
};

// Función para buscar un producto por nombre
function buscarProducto(nombre: string): Producto | undefined {
    const productoEncontrado = productos.find((producto) => producto.nombre === nombre); // Buscar el producto por nombre
    if (productoEncontrado) {
        console.log(`Producto encontrado: ${productoEncontrado.nombre}, por un precio de: ${productoEncontrado.valor}`);
    } else {
        console.log(`Producto ${nombre} no encontrado.`);
    }
    return productoEncontrado;
}

// Función para calcular el valor total del inventario
function calcularValorTotal(): number {
    const totalValor = productos.reduce((total, producto) => total + producto.valor, 0); // Sumar el valor de todos los productos
    console.log(`El valor total del inventario es: ${totalValor}`);
    return totalValor;
}

// Función para salir del programa
function Salir() {
    console.log("Saliendo del programa...");
}

// Ejemplo de uso:

// Agregar productos
agregarProducto("Camisa", 20);
agregarProducto("Pantalón", 30);
agregarProducto("Zapatos", 50);

// Buscar un producto
buscarProducto("Camisa");

// Calcular el valor total del inventario
calcularValorTotal();

// Salir del programa
Salir();
