import React from 'react'
import { View, Text } from 'react-native'
import Users from '../components/Users'
import UserDetails from '../components/UserDetails'
import { GlobalStyle } from '../styles'

import useModalControl from '../hooks/useModalControl'
import * as mock from '../mocks/list-results.json'

const UsersList = () => {
	const { showModal, setShowModal, } = useModalControl();

	return (
		<View style={GlobalStyle.style.screenContainer}>

			<View style={GlobalStyle.style.header}>
				<Text style={GlobalStyle.style.headerTxt}>
					Lista de Usuarios
				</Text>
			</View>

			<View style={GlobalStyle.style.body}>
				<Users users={mock.data} />
				<UserDetails
					visible={showModal}
					closer={setShowModal}
				/>
			</View>

		</View>
	)
}

export default UsersList
