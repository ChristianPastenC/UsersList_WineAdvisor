import React from 'react'
import { FlatList } from 'react-native'
import UserCard from './UserCard'

import * as aux from '../mocks/single-result.json'

const Users = ({
    users = [],
    trigger = () => { },
    setSelected = () => { }
}) => {
    return (
        <FlatList
            data={users}
            renderItem={({ item }) => (
                <UserCard
                    user={item}
                    setter={() => {
                        trigger()
                        setSelected(aux.data)
                    }}
                />
            )}
            keyExtractor={item => item.id}
        />
    )
}

export default Users
