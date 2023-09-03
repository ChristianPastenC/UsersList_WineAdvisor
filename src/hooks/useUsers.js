import { useState, useCallback } from 'react';
import { getUsersList } from '../services/users';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = useCallback(async () => {
        try {
            setLoading(true);
            const newList = await getUsersList();
            setUsers(newList);
        } catch (err) {
            throw new Error('Getting users list');
        } finally { setLoading(false) }
    }, []);

    return { users, getUsers, loading }
}

export default useUsers;