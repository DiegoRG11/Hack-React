import React from "react";
import { Button, ListItem, UnorderedList, Flex } from "@chakra-ui/react";

const UserItem = ({ user, deleteUser, editUser }) => {
    const truncatedName = user.nombre.length > 10 ? user.slice(0, 10) + '...' : user.nombre;

    return (
        <Flex alignContent={"center"} justifyContent={"center"} w={'100vw'} h={'100%'} mt={20}>
            <UnorderedList >
                <ListItem>Nombre: {truncatedName}</ListItem>
                <ListItem>Correo: {user.correo}</ListItem>
                <ListItem>Edad: {user.edad}</ListItem>
            </UnorderedList>
            <Button mt={100} ml={5} onClick={() => editUser(user)}>Editar</Button>
            <Button mt={100} mr={350} ml={5} onClick={() => deleteUser(user.correo)}>Eliminar</Button>
        </Flex>
    );
};

export default UserItem;