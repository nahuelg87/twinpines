//Pagina Vacaciones

function elegirMotivo($value){
    let selectBox = document.getElementById("tipoLicencia");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    let diasSeleccionados = 0;

    if(selectedValue=="diasLibres"){
        diasSeleccionados = 12;
        diasRestan = disponibilidad - diasSeleccionados
        const diasMenos = document.createElement("p");
        diasMenos.innerText = `Vas a usar ${12} dias disponibles! 
        Te quedaran ${disponibilidad-diasSeleccionados} dias libres para utilizar`;
        resultado2.appendChild(diasMenos);
    }
    else if(selectedValue=="diasEstudio"){
        diasSeleccionados = 2;
        diasRestan = disponibilidad - diasSeleccionados
        const diasMenos = document.createElement("p");
        diasMenos.innerText = `Vas a usar ${2} dias de estudio! Te quedaran ${disponibilidad-diasSeleccionados} dias libres para utilizar`;
        resultado2.appendChild(diasMenos);
    }
    else if(selectedValue=="diasCumple"){
        diasSeleccionados = 1;
        diasRestan = disponibilidad - diasSeleccionados
        const diasMenos = document.createElement("p");
        diasMenos.innerText = `Vas a usar ${1} dia de cumpleaños! Te quedaran ${disponibilidad-diasSeleccionados} dias libres para utilizar`;
        resultado2.appendChild(diasMenos);
    }
    else if(selectedValue=="diasEnfermedad"){
        diasSeleccionados = 3;
        diasRestan = disponibilidad - diasSeleccionados
        const diasMenos = document.createElement("p");
        diasMenos.innerText = `Vas a usar ${3} dias por enfermedad! Te quedaran ${disponibilidad-diasSeleccionados} dias libres para utilizar`;
        resultado2.appendChild(diasMenos);
    }
    else if(selectedValue=="diasMaternidad"){
        diasSeleccionados = 2;
        diasRestan = disponibilidad - diasSeleccionados
        const diasMenos = document.createElement("p");
        diasMenos.innerText = `Vas a usar ${2} dias por maternidad! Te quedaran ${disponibilidad-diasSeleccionados} dias libres para utilizar`;
        resultado2.appendChild(diasMenos);
    }
    else if(selectedValue=="diasSingocesueldo"){
        diasSeleccionados = 5;
        diasRestan = disponibilidad - diasSeleccionados
        const diasMenos = document.createElement("p");
        diasMenos.innerText = `Vas a usar ${5} dias sin goce de sueldo! Te quedaran ${disponibilidad-diasSeleccionados} dias libres para utilizar`;
        resultado2.append(diasMenos);
    }
}


let disponibilidad = 0;

for (let i = 0; i < vacacionesAcumuladas.length; i++){
disponibilidad += vacacionesAcumuladas[i].diasremanentes;
}

let diasDisponibles = document.querySelector('#diasDisponibles');
diasDisponibles.style.textAlign = 'center';
diasDisponibles.style.fontSize = '1.5em';
diasDisponibles.style.paddingTop = "5px";
diasDisponibles.style.paddingBottom = "0px";

function diasx(){
if (user=="Lionel Messi" && password=="1234" && email=="lionel.messi@hotmail.com" ){
const ambar = document.createElement("p");
ambar.innerText = `Tienes ${disponibilidad} días disponibles para utilizar!`;
diasDisponibles.appendChild(ambar);
}
}

diasx()


let btnConf = document.createElement("button");
btnConf.innerHTML = "Confirmar";
diasResultado.appendChild(btnConf);

let btnRes = document.createElement("button");
btnRes.innerHTML = "Reset";
diasResultado.appendChild(btnRes);

btnConf.addEventListener('click', () => {
    const diasDef = document.createElement("p");
diasDef.innerText = `Te quedaron ${diasRestan} días disponibles para utilizar!`;
seccion2.appendChild(diasDef);
});

btnRes.addEventListener('click', () => {
    resetearElemento('resultado2');
});

function resetearElemento(id) {
const elemento = document.querySelector(`#${id}`);
elemento.innerHTML = '';
}


let diasRestan = 0; 


let newBtn = document.createElement("button");
newBtn.innerHTML = "Reset";
diasRestantes.appendChild(newBtn);

diasRestantes.addEventListener('click', () => {
    resetearElemento('seccion2');
});

function rstElm(id) {
    const elemento = document.querySelector(`#${id}`);
    elemento.innerHTML = '';
    }
