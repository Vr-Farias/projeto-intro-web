const filme1 =()=>{
    const lista1 = document.getElementById("lista1")

    const item0 = document.createElement("li")
    lista1.appendChild(item0)
    item0.innerHTML="Ano: 1993"

    const item1 = document.createElement("li")
    lista1.appendChild(item1)
    item1.innerHTML = "Gênero: Aventura, Fantasia"

    const item2 = document.createElement("li")
    lista1.appendChild(item2)
    item2.innerHTML = "Roteiro original: Sim"

}

filme1();

const filme2 = () =>{
    const lista2 = document.getElementById("lista2")

    const item0 = document.createElement("li")
    lista2.appendChild(item0)
    item0.innerHTML="Ano: 1997"

    const item1 = document.createElement("li")
    lista2.appendChild(item1)
    item1.innerHTML = "Gênero: Aventura, Fantasia"

    const item2 = document.createElement("li")
    lista2.appendChild(item2)
    item2.innerHTML = "Roteiro original: Sim"
}

filme2();

const filme3 = () =>{
    const lista3 = document.getElementById("lista3")

    const item0 = document.createElement("li")
    lista3.appendChild(item0)
    item0.innerHTML="Ano: 1997"

    const item1 = document.createElement("li")
    lista3.appendChild(item1)
    item1.innerHTML = "Gênero: Aventura, Fantasia"

    const item2 = document.createElement("li")
    lista3.appendChild(item2)
    item2.innerHTML = "Roteiro original: Sim"
}

filme3();

const buscaFilme = document.getElementById("id-busca")

const alerta = document.getElementById("nadaencontrado")

function buscar() {
    console.log(buscaFilme.value)
    const alerta = document.getElementById("nadaencontrado")

    if(buscaFilme.value === "Jurassic Park III"){
        const retiraCard3 = document.getElementById("item3").style.display = "block"

        const retiraCard1 = document.getElementById("item1").style.display = "none"

        const retiraCard2 = document.getElementById("item2").style.display = "none"
    }else if(buscaFilme.value === "O Mundo Perdido"){
        const retiraCard3 = document.getElementById("item3").style.display = "none"

        const retiraCard1 = document.getElementById("item1").style.display = "none"

        const retiraCard2 = document.getElementById("item2").style.display = "block"
    }else if(buscaFilme.value === "Jurassic Park I"){
        const retiraCard3 = document.getElementById("item3").style.display = "none"

        const retiraCard1 = document.getElementById("item1").style.display = "block"

        const retiraCard2 = document.getElementById("item2").style.display = "none"
    }else if(buscaFilme.value === ""){
        alert("Escreva sua busca!")
    }else{
        const retiraCard3 = document.getElementById("item3").style.display = "none"

        const retiraCard1 = document.getElementById("item1").style.display = "none"

        const retiraCard2 = document.getElementById("item2").style.display = "none"

        const alerta = document.getElementById("nadaencontrado").style.display = "block"
    }
}





