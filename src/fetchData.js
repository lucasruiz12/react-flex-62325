const productos = [
    {
        id: 1,
        nombre: "Agua",
        precio: 10,
        categoria: "Sin alcohol"
    },
    {
        id: 2,
        nombre: "Jugo",
        precio: 12,
        categoria: "Sin alcohol"
    },
    {
        id: 3,
        nombre: "Cerveza",
        precio: 8,
        categoria: "Con alcohol"
    },
    {
        id: 4,
        nombre: "Gaseosa",
        precio: 5,
        categoria: "Sin alcohol",
    },
    {
        id: 5,
        nombre: "Vino",
        precio: 15,
        categoria: "Con alcohol"
    },
    {
        id: 6,
        nombre: "Champagne",
        precio: 35,
        categoria: "Con alcohol"
    },
    {
        id: 7,
        nombre: "Amargo",
        precio: 8,
        categoria: "Sin alcohol"
    },
];

export default function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
};