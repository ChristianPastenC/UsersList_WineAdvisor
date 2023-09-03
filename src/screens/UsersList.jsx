import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Users from '../components/Users'
import { GlobalStyle } from '../styles'

import useUsers from '../hooks/useUsers'
// import * as mock from '../mocks/list-results.json'

const UsersList = () => {
	const { users, getUsers, loading } = useUsers()

	useEffect(() => { getUsers() }, [])

	return (
		<View style={GlobalStyle.style.screenContainer}>

			<View style={GlobalStyle.style.header}>
				<Text style={GlobalStyle.style.headerTxt}>
					Lista de Usuarios
				</Text>
			</View>

			<View style={GlobalStyle.style.body}>
				{
					loading
						? (<ActivityIndicator />)
						: (<Users users={users} />)
				}
			</View>

		</View>
	)
}

export default UsersList
