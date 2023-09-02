import React from 'react'
import { View, Text, FlatList } from 'react-native'
import UserCard from './UserCard'

const Users = ({ users }) => {
    return (
        <View>
            <Text>Users List</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserCard user={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Users
