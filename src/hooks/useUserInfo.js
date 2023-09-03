import { useRef, useState, useCallback } from 'react';
import { getUserInfo } from '../services/users';

const useUserInfo = ({ id }) => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    const previousResult = useRef(id);

    const getUserData = useCallback(async ({ id }) => {
        if (id === previousResult.current) return;

        try {
            setLoading(true);
            previousResult.current = id;
            const data = await getUserInfo({ id });
            setUserData(data);
        } catch (e) {
            throw new Error('Getting user info');
        } finally { setLoading(false) }
    }, [])

    return { userData, loading, getUserData, setUserData }
}

export default useUserInfo;