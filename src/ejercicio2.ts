import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('SIGINT', () => {
    console.log("\nSaliendo del programa...");
    Salir();
});

// Interfaz que define la estructura de un empleado
interface Empleado {
    nombre: string;
    salario: number;
  }
// Arreglo para almacenar la lista de empleados
let empleados: Empleado[] = [];
// Función para agregar un empleado a la lista
function agregarEmpleado(nombre: string, salario: number): void {
    const nuevoEmpleado: Empleado = { nombre, salario }; // Crear un nuevo objeto empleado
    empleados.push(nuevoEmpleado); // Agregar el empleado al arreglo
    console.log(`Empleado agregado: ${nombre}, Salario: ${salario}`);
  }

  // Función para buscar un empleado por nombre
function buscarEmpleado(nombre: string): Empleado | undefined {
    const empleadoEncontrado = empleados.find((empleado) => empleado.nombre === nombre); // Buscar el empleado por nombre
    if (empleadoEncontrado) {
      console.log(`Empleado encontrado: ${empleadoEncontrado.nombre}, Salario: ${empleadoEncontrado.salario}`);
    } else {
      console.log(`Empleado con nombre ${nombre} no encontrado.`);
    }
    return empleadoEncontrado;
  }
// Función para calcular el salario promedio de todos los empleados
function calcularSalarioPromedio(): number {
    const totalEmpleados = empleados.length; // Obtener la cantidad de empleados
    if (totalEmpleados === 0) {
      console.log("No hay empleados registrados.");
      return 0;
    }
    
    const sumaSalarios = empleados.reduce((total, empleado) => total + empleado.salario, 0); // Sumar todos los salarios
    const salarioPromedio = sumaSalarios / totalEmpleados; // Calcular el promedio
    
    console.log(`El salario promedio es: ${salarioPromedio}`);
    return salarioPromedio;
  }

  function Salir() {
    console.log("Saliendo del programa...");
    rl.close();
}
// Agregar empleados
agregarEmpleado("Valentina", 5000);
agregarEmpleado("Carlos", 7000);
agregarEmpleado("Andrea", 6000);

// Buscar un empleado
buscarEmpleado("Carlos");

// Calcular el salario promedio
calcularSalarioPromedio();
    