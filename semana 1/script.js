// const filme1 = [
//     {nome: "Jurassic Park"},
//     {plot: "Filme de dinossauros"}
//     {ano: "1993"},
//     {diretor: "Steen Spielberg"},
//     {genero: "Aventura"}
//     {roteiroOriginal: true}
// ];

// const filme2 = [
//     {nome: "Jurassic Park - O mundo perdido"},
//     {plot: "Filme de dinossauro"}
//     {ano: "1997"},
//     {diretor: "Steven Spielberg"},
//     {genero: "Aventura"}
//     {roteiroOriginal: true}
// ];

// const filme3 = [
//     {nome: "Jurassic Park 3"},
//     {plot: "Filme de dinossauro"}
//     {ano: "2001"},
//     {diretor: "Steven Spielberg"},
//     {genero: "Aventura"}
//     {roteiroOriginal: true}
// ];


const nomeFilme1 = "Jurassic Park";
const anoFilme1 = 1993;
const roteiroOriginal1 = true;
const genero1 = ["aventura", "fantasia", "dinossauros"];

const nomeFilme2 = "Jurassic Park - O Mundo Perdido";
const anoFilme2 = 1997;
const roteiroOriginal2 = true;
const genero2 = ["aventura", "fantasia", "dinossauros"];

const nomeFilme3 = "Jurassic Park 3";
const anoFilme3 = 2001;
const roteiroOriginal3 = true;
const genero3 = ["aventura", "fantasia", "dinossauros"];

const media = ((anoFilme1 + anoFilme2 + anoFilme3) / 3);
console.log("A média dos anos dos filmes é", (media));

const roteiros = roteiroOriginal1 && roteiroOriginal2 && roteiroOriginal3;
console.log(roteiros);

console.log(`LISTA DE FILMES\n
    NOME : ${nomeFilme1.toUpperCase()}\n
    ANO : ${anoFilme1}\n
    ROTEIRO ORIGINAL? : ${roteiroOriginal1}\n
    GENERO : [${genero1}]\n
    ---------------------\n
    NOME : ${nomeFilme2.toUpperCase()}\n
    ANO : ${anoFilme2}\n
    ROTEIRO ORIGINAL? : ${roteiroOriginal2}\n
    GENERO : [${genero2}]\n
    ---------------------\n
    NOME : ${nomeFilme3.toUpperCase()}\n
    ANO : ${anoFilme3}\n
    ROTEIRO ORIGINAL? : ${roteiroOriginal3}\n
    GENERO : [${genero3}]\n
    `);

