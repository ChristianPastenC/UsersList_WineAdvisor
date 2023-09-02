import React from 'react'
import { View } from 'react-native'
import Users from '../components/Users'

import * as mock from '../mocks/list-results.json'

const UsersList = () => {
  return (
    <View>
      <Users users={mock.data} />
    </View>
  )
}

export default UsersList
