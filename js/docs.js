const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()


cards.addEventListener('click', e => {
    docsDescarga(e)
})

const docsDescarga = e => {
    if (e.target.classList.contains("btn-dark")) {
        window.open("https://1.bp.blogspot.com/_TZIVJF6RllE/TO1SurNAOMI/AAAAAAAAFTw/SdxgjInJ2Ss/s1600/recibo+noviembre+2010+empleados+de+comercio.bmp", "reciboTab");
    }
    e.stopPropagation()
}

document.addEventListener('DOMContentLoaded', e => { 
    fetchDocs() 
    if (localStorage.getItem('carritoDocs')) {
        carritoDocs = JSON.parse(localStorage.getItem('carritoDocs'))
        renderCarritoDocs()
    }
})

const fetchDocs = async () => {
    const docsJson = await fetch('../js/docs.json');
    const docs = await docsJson.json()
    renderCards(docs)
}

const renderCards = docs => {
    docs.forEach(item => {
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