///////////////////////////CARRITO DE DIAS A CONSUMIR
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}


document.addEventListener('DOMContentLoaded', e => { 
    fetchDias() 
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        renderCarrito()
    }
})

cards.addEventListener('click', e => {
    addCarrito(e)
})

items.addEventListener('click', e => { btnAumentarDisminuir(e) })

footer.addEventListener('click', e => { btnReserva(e) })

const fetchDias = async () => {
    const diasJson = await fetch('../js/dias.json');
    const dias = await diasJson.json()
    // console.log(dias)
    renderCards(dias)
}

const renderCards = dias => {
    dias.forEach(item => {
        templateCard.querySelector('h5').textContent = item.title
        templateCard.querySelector('p').textContent = item.cantidadDias
        // templateCard.querySelector('button').dataset.id = item.id
        templateCard.querySelector('img').setAttribute("src", item.imagen)
        templateCard.querySelector('.btn-dark').dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    if (user=="Lionel Messi" && password=="1234" && email=="lionel.messi@hotmail.com" ){
        cards.appendChild(fragment);
}}

const addCarrito = e => {
    if (e.target.classList.contains("btn-dark")) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    console.log(objeto)
    const paqueteDias = {
        id:objeto.querySelector('.btn-dark').dataset.id,
        title:objeto.querySelector('h5').textContent,
        valor:objeto.querySelector('p').textContent,
        cantidadDias: 1
    }
    if(carrito.hasOwnProperty(paqueteDias.id)) {
        paqueteDias.cantidadDias = carrito[paqueteDias.id].cantidadDias + 1
    }
    carrito[paqueteDias.id] = {...paqueteDias}
    renderCarrito()

}


const renderCarrito = () => {
    console.log(carrito)
    items.innerHTML = ''
    Object.values(carrito).forEach(paqueteDias => {
        templateCarrito.querySelector('th').textContent = paqueteDias.id
        templateCarrito.querySelectorAll('td')[0].textContent = paqueteDias.title
        templateCarrito.querySelectorAll('td')[1].textContent = paqueteDias.cantidadDias
        templateCarrito.querySelector('span').textContent = paqueteDias.valor * paqueteDias.cantidadDias
        templateCarrito.querySelector('.btn-info').dataset.id = paqueteDias.id
        templateCarrito.querySelector('.btn-danger').dataset.id = paqueteDias.id
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
    console.log()
    renderFooter()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const renderFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío!</th>
        `
        return
    }
// sumar cantidad y sumar totales
const nCantidad = Object.values(carrito).reduce((acc, { cantidadDias }) => acc + cantidadDias, 0)
const nValor = Object.values(carrito).reduce((acc, {cantidadDias, valor}) => acc + cantidadDias * valor ,0)
if (nValor === 33) {
    Swal.fire({
    icon: 'warning',
    title: 'Has alcanzado el maximo de dias disponibles',
    text: 'Confirmar operacion?',
    confirmButtonColor: '#32CD32',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#FF0000',
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
        icon: 'success',
        title: 'Realizado!',
        text: 'Tu reserva esta completa, no tienes mas dias disponibles!',
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
        carrito = {}
        renderCarrito()
        // location.reload();
        window.location.replace("../index.html");
    }})
    disponibilidad = 0;
    diasx()
    }
    })
}
if (nValor >=34){
    Swal.fire({
        icon: 'error',
        title: 'Has superado los dias disponibles!',
        text: 'Borra algunos dias',
        confirmButtonColor: '#32CD32',
        
        })
}

templateFooter.querySelectorAll('td')[0].textContent = nCantidad
templateFooter.querySelector('span').textContent = nValor

const clone = templateFooter.cloneNode(true)
fragment.appendChild(clone)

footer.appendChild(fragment)

const boton = document.querySelector('#vaciar-carrito')
boton.addEventListener('click', () => {
    carrito = {}
        renderCarrito()
    })
}

const btnReserva = e => {
    if (e.target.classList.contains('btn-success')) {
        Swal.fire({
        icon: 'success',
        title: 'Realizado!',
        text: 'Tu reserva esta completa!',
        timer: 3000,
        timerProgressBar: true,
        willClose: () => {
        carrito = {}
        renderCarrito()
        window.location.replace("../index.html");
    }})}}


const btnAumentarDisminuir = e => {
    // console.log(e.target.classList.contains('btn-info'))
    if (e.target.classList.contains('btn-info')) {
        const paqueteDias = carrito[e.target.dataset.id]
        paqueteDias.cantidadDias++
        carrito[e.target.dataset.id] = { ...paqueteDias }
        renderCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const paqueteDias = carrito[e.target.dataset.id]
        paqueteDias.cantidadDias--
        if (paqueteDias.cantidadDias === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...paqueteDias}
        }
        renderCarrito()
    }
    e.stopPropagation()
}


const vacacionesAcumuladas = [{anio:1, diasrecibidos:14, diasutilizados: 10, diasremanentes:4, documentos:12},
                            {anio:2, diasrecibidos:14, diasutilizados: 5,  diasremanentes:9, documentos:12},
                            {anio:3, diasrecibidos:14, diasutilizados: 14,  diasremanentes:8, documentos:12},
                            {anio:4, diasrecibidos:14, diasutilizados: 4,  diasremanentes:12, documentos:2},
]

let disponibilidad = 0;

for (let i = 0; i < vacacionesAcumuladas.length; i++){
disponibilidad += vacacionesAcumuladas[i].diasremanentes;
}

let diasDisponibles2 = document.querySelector('#vacasX');
diasDisponibles2.style.textAlign = 'center';
diasDisponibles2.style.fontSize = '1.5em';
diasDisponibles2.style.paddingTop = "5px";
diasDisponibles2.style.paddingBottom = "0px";

function diasx(){
let user = localStorage.getItem('user')
let password = localStorage.getItem('password')
let email = localStorage.getItem('email')
if (user=="Lionel Messi" && password=="1234" && email=="lionel.messi@hotmail.com" ){
const ambar2 = document.createElement("p");
ambar2.innerText = `Tienes ${disponibilidad} días disponibles para utilizar!`;
diasDisponibles2.appendChild(ambar2);
}
}

diasx()
