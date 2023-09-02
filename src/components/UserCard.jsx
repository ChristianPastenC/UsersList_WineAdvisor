import React from 'react'
import { View, Text } from 'react-native'

const UserCard = ({ user }) => {
    return (
        <View>
            <Text>{user.first_name  }</Text>
        </View>
    )
}

export default UserCard
