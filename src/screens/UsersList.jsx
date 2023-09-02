import React from 'react'
import { View, Text } from 'react-native'
import Users from '../components/Users'
import { GlobalStyle } from '../styles'

import * as mock from '../mocks/list-results.json'

const UsersList = () => {
  return (
    <View style={GlobalStyle.style.screenContainer}>

      <View style={GlobalStyle.style.header}>
        <Text style={GlobalStyle.style.headerTxt}>
          Lista de Usuarios
        </Text>
      </View>

      <View style={GlobalStyle.style.body}>
        <Users users={mock.data} />
      </View>

    </View>
  )
}

export default UsersList
