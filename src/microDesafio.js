/*





*/



// import React, { createContext, useContext, useState } from 'react';
// import './style.css';

// const UserContext = createContext();

// const useUserContext = () => useContext(UserContext);

// const ContextProvider = (props) => {
//   const user = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     profilePic:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/20px-User-avatar.svg.png',
//     isLoggedIn: true,
//   };

//   const [usuario, setUsuario] = useState(user);
  
//   const otroUser = {
//     name: 'Juan Pérez',
//     email: 'juanperez@example.com',
//     profilePic:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/20px-User-avatar.svg.png',
//     isLoggedIn: false,
//   }

//   return (
//     <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
//   );
// };

// const App = () => {
  
//   return (
//     <div>
//       <ContextProvider>
//         <Nav />
//         <UserInfo />
//         <Footer />
//       </ContextProvider>
//     </div>
//   );
// };

// export default App;

// const UserInfo = () => {

//   const user = useUserContext();

//   return (
//     <div className="user-info">
//       <h2>Información del usuario:</h2>
//       <p>
//         Nombre: {user.name} <Avatar />
//       </p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// const Avatar = () => {
//   const { profilePic } = useUserContext();
//   return <img className="avatar" src={profilePic} alt="user avatar" />;
// };

// const Footer = () => {
//   return (
//     <footer>
//       <small>
//         <p>2023 ©Coderhouse all rights reserved</p>
//         <a href="#">
//           <Avatar />
//           Go to dashboard
//         </a>
//       </small>
//     </footer>
//   );
// };

// const Nav = () => {
//   const { isLoggedIn, name } = useUserContext();

//   const handleLogin = () => {

//   }

//   if (isLoggedIn)
//     return (
//       <nav>
//         <button onClick={() => handleLogin()}>{name} Logout</button>
//       </nav>
//     );

//   return (
//     <nav>
//       <button onClick={() => handleLogin()}>Login</button>
//     </nav>
//   );
// };
