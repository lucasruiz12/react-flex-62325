const productos = [
    {
       id: 1,
       nombre: "Agua",
       precio: 10 
    },
    {
       id: 2,
       nombre: "Jugo",
       precio: 12 
    },
    {
       id: 3,
       nombre: "Cerveza",
       precio: 8 
    },
    {
       id: 4,
       nombre: "Gaseosa",
       precio: 5 
    },
];

export default function fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
};