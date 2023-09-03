import * as extraData from '../mocks/extra-data.json';

const getUsersList = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const responseA = await fetch(`https://reqres.in/api/users`);
            const jsonA = await responseA.json();

            const responseB = await fetch(`https://reqres.in/api/users/?page=2`);
            const jsonB = await responseB.json();

            const users = [...jsonA.data, ...jsonB.data, ...extraData.data];

            const formattedUsers = users.map(user => ({
                id: user.id,
                name: `${user.first_name} ${user.last_name}`,
                img: user.avatar,
                email: user.email, // It is for extra data
            }));

            resolve(formattedUsers);
        } catch (err) {
            reject(new Error(`Error getting users list: ${err.message}`));
        }
    });
};

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