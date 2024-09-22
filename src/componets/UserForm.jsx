import { Button, Flex, Input } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";

const UserForm = ({ addUser, updateUser, currentUser}) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    useEffect(() => {
        if (currentUser) {
            setNombre(currentUser.nombre);
            setCorreo(currentUser.correo);
            setEdad(currentUser.edad);
        } else {
            setNombre('');
            setCorreo('');
            setEdad('');
        }
    }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentUser) {
            updateUser({ ...currentUser, nombre, correo, edad });
        } else {
            addUser({ nombre, correo, edad});
        }

        setNombre('');
        setCorreo('');
        setEdad('');
    };

    return (
        <Flex alignContent={"center"} justifyContent={"center"} w={'100vw'} h={'100%'} mt={5} >
            <form onSubmit={handleSubmit}>
                <Input
                size='sm'
                mt={10}
                m={3}
                width={60}
                color={'#94c4ff'}
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required 
                />
                <Input
                size='sm'
                m={3}
                width={60} 
                type="email"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required 
                />
                <Input
                size='sm'
                m={3}
                width={60} 
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                required 
                />
                <Button ml={5} type="submit">{currentUser ? 'Actualizar' : 'Agregar'}</Button>
            </form>
        </Flex>
    );
};

export default UserForm;