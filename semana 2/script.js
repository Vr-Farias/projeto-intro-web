const arrayFilmes = []

const filme1 = {
     nome: "Jurassic Park",
     ano: "1993",
     genero: ["Aventura", "Fantasia"],
     roteiroOriginal: true
    };

 const filme2 = {
     nome: "Jurassic Park - O mundo perdido",
     ano: "1997",
     genero: ["Aventura", "Fantasia"],
     roteiroOriginal: true
    };

 const filme3 = {
     nome: "Jurassic Park 3",
     ano: "2001",
     genero: ["Aventura", "Fantasia"],
     roteiroOriginal: true
    };


const roteiro = true

if(filme1.roteiroOriginal == roteiro){
    arrayFilmes.push(filme1);
}if(filme2.roteiroOriginal == roteiro){
    arrayFilmes.push(filme2);
}if(filme3.roteiroOriginal == roteiro){
    arrayFilmes.push(filme3);
}else{
    alert("Filme não é original!");
};


console.log(arrayFilmes);

