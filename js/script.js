//BOTON DROPDOWN MENU
function menuLogin() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
function login() {
    window.location.replace("login.html");
}
function logout() {
    window.location.replace("login.html");
}

//LOGIN
function login(){
    let user=document.getElementById("user").value;
    let password=document.getElementById("password").value;
    let email=document.getElementById("email").value;

    if (user=="Lionel Messi" && password=="1234" && email=="lionel.messi@hotmail.com" ){
        window.location="../index.html"
        let = localStorage.setItem("user",user);
        let = localStorage.setItem("password",password);
        let = localStorage.setItem("email",email); 
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'No hemos podido identificarte..',
            text: 'Vuelve a intentarlo!',
            confirmButtonColor: '#32CD32',
        });
    }

}

//LOGOUT
const btnLogout = document.querySelector('#btnLogout')

btnLogout.addEventListener('click', () => {
    localStorage.removeItem('user')
    localStorage.removeItem('password')
    localStorage.removeItem('email')
})

//NavBar Aside - Efecto colapso
function openNav() {
    document.getElementById("mySidebar").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


//Lista de empleados

//Cartel de bienvenida
let user = localStorage.getItem('user')
let password = localStorage.getItem('password')
let email = localStorage.getItem('email')
document.querySelector('#bienvenida').innerText = `Buenos días ${user} 
¡Bienvenido al portal de empleados!`;



//Perfil del usuario

let imgProfile = '../assets/messi.jpg';
let imgProfile2 = 'assets/messi2.jpg';

let messiJSN = {
    Nombre: "Lionel Messi",
    Edad: 35,
    Antiguedad: 3,
    Imagen:imgProfile,
    Imagen2:imgProfile2,
    Descripcion:'Leo Messi',
}

let img = document.createElement('img');
img.src = messiJSN.Imagen;
img.setAttribute('alt', 'Descripción de la imagen');
img.style.width = "60%"; 
img.style.borderRadius = "50%";
img.style.display = "block";
img.style.objectFit = "contain"; 
img.style.margin = "auto";

let miDiv = document.getElementById('perfil');

function LioM(){
    if (user=="Lionel Messi" && password=="1234" && email=="lionel.messi@hotmail.com" ){
        miDiv.appendChild(img);
}
}

LioM()


let br = document.createElement('br');
miDiv.appendChild(br);

let texto = document.createElement('p');
texto.textContent = 'Imagen de perfil';

miDiv.appendChild(texto);

var div = document.getElementById("perfil");
div.style.textAlign = "center";

let btnPic = document.createElement("button");
btnPic.innerHTML = "Imagen 1";
btnPic.onclick = function () {
    img.src = messiJSN.Imagen
};
perfil.appendChild(btnPic);

let btnPic2 = document.createElement("button");
btnPic2.innerHTML = "Imagen 2";
btnPic2.onclick = function () {
    img.src = messiJSN.Imagen2
};
perfil.appendChild(btnPic2);

//dias acumulados historicamente
let diasAcumulados = 0;

for (let i = 0; i < vacacionesMessi.length; i++){
    diasAcumulados += vacacionesMessi[i].diasremanentes;
}

let botonVacaciones = document.querySelector('#botonvacaciones');
botonVacaciones.style.textAlign = 'center';
botonVacaciones.style.fontSize = '1.5em';
botonVacaciones.style.paddingTop = "5px";
botonVacaciones.style.paddingBottom = "0px";

function vacacionesFN(){
    if (user=="Lionel Messi" && password=="1234" && email=="lionel.messi@hotmail.com" ){
        const resultado = document.createElement("p");
        resultado.innerText = `Tienes ${diasAcumulados} días disponibles para utilizar!`;
        botonVacaciones.appendChild(resultado);
}
}

vacacionesFN()


let btn = document.createElement("button");
btn.innerHTML = "Reservar!";
btn.onclick = function () {
    window.location.replace("./pages/vacaciones.html");
};
botonVacaciones.appendChild(btn);


//LISTA DE ULTIMOS INGRESOS A LA COMPAÑIA
const ultimosIngresos = document.querySelector('#ultimosIngresos')

ingresos.forEach(ingreso => {
    const li = document.createElement('li')
    li.innerHTML = `
        <h4>Nombre y Apellido: ${ingreso.nuevoUser}</h4>
        <h4>Mes de ingreso:    ${ingreso.mesIngreso}</h4>
        <h4>Año de ingreso:    ${ingreso.anioIngreso}</h4>
    `;

    ultimosIngresos.append(li)
});

//LISTA DE CUMPLEAÑOS MES ACTUAL

const listCumpleanios = document.querySelector('#listCumpleanios')

cumpleanios.forEach(usuario => {
    const li = document.createElement('li')
    li.innerHTML = `
        <h4>Nombre: ${usuario.cumpleaniero}</h4>
        <h4>Edad:   ${usuario.edad}</h4>
        <h4>Sector:   ${usuario.area}</h4>
    `;
    
    listCumpleanios.append(li)
});

//DOCUMENTOS
let docsAcumulados = 0;

for (let x = 0; x < vacacionesMessi.length; x++){
    docsAcumulados += vacacionesMessi[x].documentos;
}

let botonDocumentos = document.querySelector('#botondocumentos');
botonDocumentos.style.textAlign = 'center';
botonDocumentos.style.fontSize = '1.5em';
botonDocumentos.style.paddingTop = "5px";
botonDocumentos.style.paddingBottom = "0px";

function documentosFN(){
    if (user=="Lionel Messi" && password=="1234" && email=="lionel.messi@hotmail.com" ){
        const resDocs = document.createElement("p");
        resDocs.innerText = `Tienes ${docsAcumulados} recibos de sueldos guardados!`;
        botonDocumentos.appendChild(resDocs);
    }
}

documentosFN()

let btnx = document.createElement("button");
btnx.innerHTML = "Revisar!";
btnx.onclick = function () {
    window.location.replace("./pages/documentos.html");
};
botonDocumentos.appendChild(btnx);
