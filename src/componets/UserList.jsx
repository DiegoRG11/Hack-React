import React from "react";
import UserItem from './UserItems';
import { Heading } from "@chakra-ui/react";

const UserList = ({users, deleteUser, editUser }) => {
    return (
        <div>
            {users.map((user) => (
                <UserItem key={user.correo} user={user} deleteUser={deleteUser} editUser={editUser} />
            ))}
            <Heading as='h5' size='md' className="gestionUsuario">Total de Usuarios: {users.length}</Heading>
        </div>
    );
};

export default UserList;