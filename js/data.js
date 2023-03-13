let x = ""
let antiguedad = "";
let acumulados = "";
let id = "";

const listaEmpleados = [{id: 123, nombre: "Pedro Rojas", edad:39, email:"pedrorojas@hotmail.com"},
                        {id: 264, nombre: "Nahuel Genari", edad:35, email:"nahuelgenari@hotmail.com"},
                        {id: 200, nombre: "Lionel Messi", edad:36, email:"lionelmessi@hotmail.com"},
                        {id: 345, nombre: "Ramon Diaz", edad:27, email:"ramondiaz@hotmail.com"},
                        {id: 777, nombre: "Solid Snake", edad:54, email:"solidsnake@hotmail.com"}];

class Empleado {
    constructor(nombre, antiguedadx, acumulado){
        this.nombre = nombre;
        this.antiguedadx = antiguedadx;
        this. acumulado = acumulado; 
    }
} 
let idA = new Empleado("Ramon Diaz", 8, 15);
let idB = new Empleado("Lionel Messi", 7, 28);

// //=================DOM=================
// // console.log(document.getElementById('calc'))
// console.log(document.getElementById('titulo'))

//DIAS DE VACACIONES
const vacacionesMessi = [{anio:1, diasrecibidos:14, diasutilizados: 10, diasremanentes:4, documentos:12},
                        {anio:2, diasrecibidos:14, diasutilizados: 5,  diasremanentes:9, documentos:12},
                        {anio:3, diasrecibidos:14, diasutilizados: 14,  diasremanentes:0, documentos:12},
                        {anio:4, diasrecibidos:14, diasutilizados: 4,  diasremanentes:10, documentos:2},
]

//Reserva Dias
const vacacionesAcumuladas = [{anio:1, diasrecibidos:14, diasutilizados: 10, diasremanentes:4, documentos:12},
                        {anio:2, diasrecibidos:14, diasutilizados: 5,  diasremanentes:9, documentos:12},
                        {anio:3, diasrecibidos:14, diasutilizados: 14,  diasremanentes:0, documentos:12},
                        {anio:4, diasrecibidos:14, diasutilizados: 4,  diasremanentes:10, documentos:2},
]

//DOCUMENTOS A FIRMAR
let reciboImg = '../assets/recibo.jpg';

// const array = [{Anio: 2020, Mes: "Enero", documento: reciboImg},
//                 {Anio: 2020, Mes: "Febrero", documento: reciboImg}, 
//                 {Anio: 2020, Mes: "Marzo", documento: reciboImg},
//                 {Anio: 2020, Mes: "Abril", documento: reciboImg},
//                 {Anio: 2020, Mes: "Mayo", documento: reciboImg},
//                 {Anio: 2020, Mes: "Junio", documento: reciboImg},
//                 {Anio: 2020, Mes: "Julio", documento: reciboImg},
//                 {Anio: 2020, Mes: "Agosto", documento: reciboImg},
//                 {Anio: 2020, Mes: "Septiembre", documento: reciboImg},
//                 {Anio: 2020, Mes: "Octubre", documento: reciboImg},
//                 {Anio: 2020, Mes: "Noviembre", documento: reciboImg},
//                 {Anio: 2020, Mes: "Diciembre", documento: reciboImg},
// ]


//ULTIMOS INGRESOS EN LA COMPAÑIA
const ingresos = [{nuevoUser:"Silvio Roldan", mesIngreso:"Mayo", anioIngreso: 2022},
                {nuevoUser:"John Connor", mesIngreso:"Agosto", anioIngreso: 2022},
                {nuevoUser:"Jill Valentine", mesIngreso:"Septiembre", anioIngreso: 2022},
                {nuevoUser:"Frodo Bolson", mesIngreso:"Septiembre", anioIngreso: 2022},
                {nuevoUser:"Abril O'Neal", mesIngreso:"Enero", anioIngreso: 2023},
]

//ULTIMOS CUMPLEAÑOS
const cumpleanios = [{cumpleaniero:"Jonny Cage", edad:45, area:"Administacion"},
                    {cumpleaniero:"Laura Diaz", edad:19, area:"Sistemas"},
                    {cumpleaniero:"Cosme Argerich", edad:89, area:"Recursos Humanos"},
]