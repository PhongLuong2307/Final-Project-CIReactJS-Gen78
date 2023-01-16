import { useEffect, useState } from 'react';

const useGetUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const handleFetchUsers = () => {
            fetch(
                "https://634ea79bf34e1ed82692804b.mockapi.io/api/v1/medicenter-users"
            )
                .then((response) => {
                    return response.json()
                })
                .then((users) => {
                    setUsers(users);
                })
        }

        handleFetchUsers();
    })

    return users;

}

export default useGetUsers;