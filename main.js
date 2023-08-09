


function calcular(){
    let tipo = document.querySelector("#tipo").value
    let pasajeros = parseInt(document.querySelector("#pasajeros").value)
    let km = parseInt(document.querySelector("#km").value)
    let total = document.querySelector("#total")
    let costopasajero = document.querySelector("#totalpersona")
    
    if (tipo == "a"){
        costo = km * 2
        total.innerHTML = "Total de viaje: $" + costo
        if(pasajeros<20){
            individual = costo/20
            costopasajero.innerHTML = "Total por persona: $" + individual
        }else{
            individual = costo/pasajeros
            costopasajero.innerHTML = "Total por persona: $" + individual
        }
    }
    if (tipo == "b"){
        costo = km * 2.5
        total.innerHTML = "Total de viaje: $" + costo
        if(pasajeros<20){
            individual = costo/20
            costopasajero.innerHTML = "Total por persona: $" + individual
        }else{
            individual = costo/pasajeros
            costopasajero.innerHTML = "Total por persona: $" + individual
        }
    }
    if (tipo == "c"){
        costo = km * 3
        total.innerHTML = "Total de viaje: $" + costo
        if(pasajeros<20){
            individual = costo/20
            costopasajero.innerHTML = "Total por persona: $" + individual
        }else{
            individual = costo/pasajeros
            costopasajero.innerHTML = "Total por persona: $" + individual
        }
    }
}

document.querySelector("button").addEventListener("click", calcular)