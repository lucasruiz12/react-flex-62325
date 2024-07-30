// App.js

// import React, { useState } from 'react';
// import TaskList from './TaskList';
// import Filter from './Filter';
// import './style.css';

// export default function App() {
//   /* let filterState = 'completed'; */

//   const [filterState, setFilterState] = useState('completed');

//   const tasks = [
//     { id: 1, title: 'Comprar leche', completed: true },
//     { id: 2, title: 'Ir al gimnasio', completed: false },
//     { id: 3, title: 'Cocinar cena', completed: false },
//   ];

//   return (
//     <div>
//       <div>
//         <label htmlFor="filter">Filtrar por estado: </label>
//         <Filter filterState={filterState} setFilterState={setFilterState} />
//         <TaskList
//           tasks={
//             filterState === 'all'
//               ? tasks
//               : tasks.filter((task) => {
//                   return filterState === 'completed'
//                     ? task.completed
//                     : !task.completed;
//                 })
//           }
//         />
//       </div>
//     </div>
//   );
// }


// Filter.jsx

// import React from 'react';

// function Filter({ filterState, setFilterState }) {
//   /* ... */

//   const handleFilter = (e) => {
//     // e.target
//     e.preventDefault();
//     setFilterState(e.target.value);
//   };

//   return (
//     <select onChange={handleFilter} id="filter" value={filterState}>
//       <option value="all">Todos</option>
//       <option value="completed">Completados</option>
//       <option value="uncompleted">Sin completar</option>
//     </select>
//   );
// }

// export default Filter;


// TaskList.jsx

// import React from 'react';

// function TaskList({ tasks }) {
//   return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id}>{task.title} {task.completed? "✅" : "🛑"}</li> 
//       ))}
//     </ul>
//   );
// }

// export default TaskList;


// ----------------------------------

// import React, { useEffect, useState } from 'react';
// import './style.css';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// export default function App() {
//   const firebaseConfig = {
//     apiKey: 'AIzaSyAWhKqsLnZsiRg0KIsauJ-uyAxjWtZV91k',
//     authDomain: 'react-flex-62325.firebaseapp.com',
//     projectId: 'react-flex-62325',
//     storageBucket: 'react-flex-62325.appspot.com',
//     messagingSenderId: '775561287974',
//     appId: '1:775561287974:web:4707ef40da7169152fc9e7',
//   };
//   const collectionName = 'profesores';

//   return (
//     <div>
//       <h1>Firestore test</h1>
//       {firebaseConfig.apiKey ? (
//         <FirestoreItems
//           firebaseConfig={firebaseConfig}
//           collectionName={collectionName}
//         />
//       ) : (
//         <small>
//           <b>Instrucciones:</b> En el componente App, modifica la variable
//           firebaseConfig con las keys de tu app de Firebase.
//           <br />
//           Si es necesario también modifica la variable collectionName con el
//           nombre de la colección que creaste en Firestore
//         </small>
//       )}
//     </div>
//   );
// }

// function FirestoreItems({ firebaseConfig, collectionName }) {
//   const [items, setItems] = useState(null);

//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);

//   useEffect(() => {
//     const collectionRef = collection(db, collectionName);
//     getDocs(collectionRef).then((snapshot) => {
//       if (snapshot.size > 0) {
//         const { docs } = snapshot;
//         const data = docs.map((doc) => doc.data());
//         setItems(data);
//       } else {
//         alert('No hay items en tu colección');
//       }
//     });
//   }, []);

//   if (items)
//     return (
//       <div>
//         <h3>Documents data</h3>
//         <ul>
//           {items.map((i, index) => (
//             <li key={index}>
//               <p>{i.nombre} {i.apellido}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );

//   return <div>Loading data...</div>;
// }


// --------------------------------------

/*

PARTE 1

---------

1. Crear proyecto con el nombre correspondiente.
2. Una vez creado, dar en continuar. Luego, abrir el proyecto desde WEB </> y ponerle nombre. Registrar app.
3. Crear nueva base de datos como está, en modo prueba y modificarle las reglas después con las fechas para poder tener control del tiempo y que dure más de 30 días.


PARTE 2

------------

1. Copiar todo lo que tenemos
2. getFirestore de firebase/firestore importarlo y después const db = getFirestore(app)
3. Mostrar cómo hacer una petición y lo vamos a hacer directamente con getDocs y todo el tema de la lógica para que se vea más prolijo. Lo llevamos por ejemplo al context y de ahí lo ejecutamos en ItemListContainer


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionRef = collection(db, "items");
const q = query(collectionRef, where("nombre", "!=", "Producto 1"))

    function verProductos(){
        getDocs(collectionRef).then((snapshot) => {
            snapshot.forEach(el => {
                console.log(el.data())
            })
        });
    }
    
    
Para filtros podría cambiar collectionRef por q, no olvidarse de importar where, query y demás todo de firebase firestore

4. Ir a modificar el carrito widget que por ahora solamente va a ser un botón para finalizar compra pero lo ideal sería poder mostrar los productos y elegir qué hacer con ello. Le ponemos un console y después sabemos que ahí es donde haríamos la función de comprar, setear carrito en [], crear una nueva orden con el usuario, contacto y los productos

const orderCollection = collection(db, "orders");

const crearOrden = () => {
	const nuevaOrden = {
		nombre: "Lucas",
		telefono: 1234,
		mail: "lucas@coder.com",
		productos: carrito
	};
	
	
	setCarrito([]);
	
	addDoc(orderCollection, nuevaOrden).then(response => console.log(`Orden creada con el id ${response.idl}`)
};


*/