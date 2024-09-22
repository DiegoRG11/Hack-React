import React, { useState } from "react";
import './App.css'
import UserForm from "./componets/UserForm";
import UserList from "./componets/UserList";
import { ChakraProvider, Heading, Box, extendTheme } from "@chakra-ui/react"

const App = () => {
  const [users, setUsers ] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updateUser) => {
    setUsers(users.map((user) => (user.correo === updateUser.correo ? updateUser : user)));
    setCurrentUser(null);
  };

  const deleteUser = (correo) => {
    setUsers(users.filter((user) => user.correo !== correo));
  };

  const editUser = (user) => {
    setCurrentUser(user);
  };

  const theme = extendTheme({ 
    colors: {
        agregar: {
           500: "#27AE60",
        },
        borrar: {
            500: "#D50A0A"
         },
        actualizar: {
           500: "#0A76D5"
         }
      }
    })
  return (
    <ChakraProvider theme={theme}>
        <Box p={10}>
          <Heading className="Header">Gestion de Usurarios</Heading>
          <UserForm addUser={addUser} updateUser={updateUser} currentUser={currentUser} />
          <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
        </Box>
  </ChakraProvider>
  );

};

export default App;