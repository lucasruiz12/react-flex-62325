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
