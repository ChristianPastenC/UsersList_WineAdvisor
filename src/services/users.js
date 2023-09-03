const getUsersList = async () => {
    try {
        const response = await fetch(`https://reqres.in/api/users`);
        const json = await response.json();

        const users = json.data;

        return users?.map(user => ({
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
            img: user.avatar,
        }));

    } catch (err) { throw new Error(`Error geting users list`) }
}

const getUserInfo = async ({ id }) => {
    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        const json = await response.json();

        const usrData = json.data;
        
        return ({
            id: usrData.id,
            name: `${usrData.first_name} ${usrData.last_name}`,
            img: usrData.avatar,
            email: usrData.email,
        }) ?? {};

    } catch (err) { throw new Error(`Error getting information from user: ${id}`) }
}

export { getUsersList, getUserInfo }