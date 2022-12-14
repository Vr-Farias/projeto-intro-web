let arrayFilmes = [

    {
         nome: "Jurassic Park",
         ano: "1993",
         genero: ["Aventura", "Fantasia"],
         roteiroOriginal: true,
         imgJP1: "https://cdn.awsli.com.br/1000x1000/1206/1206083/produto/146232332/0656425f76.jpg"
        },
         {
         nome: "Jurassic Park - O mundo perdido",
         ano: "1997",
         genero:  ["Aventura", "Fantasia"],
         roteiroOriginal: true,
         imgJP2: "https://image.tmdb.org/t/p/original/jElpCJkSaRPYwIMwZY28gOKV7BK.jpg"
        },
     {
         nome: "Jurassic Park 3",
         ano: "2001",
         genero: ["Aventura", "Fantasia"],
         roteiroOriginal: true,
         imgJP3: "https://m.media-amazon.com/images/I/81LN9aCh98L._AC_SL1500_.jpg"
        }
    
    ]


const changeValueArray = () => { 
    let newArray = [];
    arrayFilmes.map((itens) => {
        newArray.push({ ...itens, genero: itens.genero.join() });
     });
     arrayFilmes = newArray;
     };

     console.log(arrayFilmes)

changeValueArray(arrayFilmes)
console.log(arrayFilmes)


