import React from 'react'
import { FlatList } from 'react-native'
import UserCard from './UserCard'

const Users = ({ users = [] }) => {
    return (
        <FlatList
            data={users}
            renderItem={({ item }) => (
                <UserCard user={item} />
            )}
            keyExtractor={item => item.id}
        />
    )
}

export default Users
