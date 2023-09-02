import React from 'react'
import { View, Text } from 'react-native'
import Users from '../components/Users'
import UserDetails from '../components/UserDetails'
import { GlobalStyle } from '../styles'

import useModalControl from '../hooks/useModalControl'
import * as mock from '../mocks/list-results.json'

const UsersList = () => {
	const { showModal, setShowModal, usrData, setUsrData } = useModalControl();

	return (
		<View style={GlobalStyle.style.screenContainer}>

			<View style={GlobalStyle.style.header}>
				<Text style={GlobalStyle.style.headerTxt}>
					Lista de Usuarios
				</Text>
			</View>

			<View style={GlobalStyle.style.body}>
				<Users
					users={mock.data}
					trigger={() => setShowModal(true)}
					setSelected={setUsrData}
				/>
				<UserDetails
					visible={showModal}
					closer={() => setShowModal(false)}
					user={usrData}
				/>
			</View>

		</View>
	)
}

export default UsersList
