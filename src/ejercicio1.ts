import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('SIGINT', () => {
    console.log("\nSaliendo del programa...");
    Salir();
});

interface Libro {
    Titulo: string;
    Autor: string;
    AnioPublicacion: number;
}

interface Biblioteca {
    Nombre: string;
    Direccion: string;
    Libros: Libro[];
}

const biblioteca: Biblioteca = {
    Direccion: "calle 5 carrera 10",
    Nombre: "Biblioteca1",
    Libros: [{
        Autor: "Yuliana",
        AnioPublicacion: 2017,
        Titulo: "Ejemplar"
    }]
};

function SolicitarInformacion() {
    rl.question('Ingrese el título de su libro: ', (Titulo) => {
        rl.question('Ingrese el autor de su libro: ', (Autor) => {
            rl.question('Ingrese el año de publicación: ', (AnioPublicacion) => {
                AgregarLibros(Titulo, Autor, AnioPublicacion);
                menu();
            });
        });
    });
}

function AgregarLibros(Titulo: string, Autor: string, AnioPublicacionv: string): void {
    const AnioPublicacion = parseInt(AnioPublicacionv);
    if (!isNaN(AnioPublicacion)) {
        biblioteca.Libros.push({
            Titulo, Autor, AnioPublicacion
        });
        console.log(`Libro agregado: ${Titulo} del autor: ${Autor}, y su fecha de publicación es: ${AnioPublicacion}`);
    } else {
        console.log('Año inválido. Intente de nuevo.');
    }
}

function Salir() {
    console.log("Saliendo del programa...");
    rl.close();
}

function BuscarLibro(): void {
    rl.question('Ingrese el título del libro que desea buscar: ', (Titulo) => {
        const LibroEncontrado = biblioteca.Libros.filter(libro => libro.Titulo.toLowerCase().includes(Titulo.toLowerCase()));
        if (LibroEncontrado.length > 0) {
            console.log('Libro encontrado:');
            LibroEncontrado.forEach(libro => {
                console.log(`Libro: ${libro.Titulo}, Autor: ${libro.Autor}, Fecha de Publicación: ${libro.AnioPublicacion}`);
            });
        } else {
            console.log('Libro no encontrado');
        }
        menu();
    });
}

function menu() {
    console.log('\nOpciones:');
    console.log('1. Agregar libro');
    console.log('2. Buscar libro');
    console.log('3. Salir');
    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                SolicitarInformacion();
                break;
            case '2':
                BuscarLibro();
                break;
            case '3':
                Salir();
                break;
            default:
                console.log('Opción no válida.');
                menu();
        }
    });
}

menu();
