import React, { useCallback } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Mixins, Colors, GlobalStyle, } from '../styles'
import DefaultIcon from './DefaultIcon'
import useModalControl from '../hooks/useModalControl'
import useUserInfo from '../hooks/useUserInfo'
import UserDetails from './UserDetails'
// import * as aux from '../mocks/single-result.json'

const UserCard = ({ user }) => {
    const { showModal, setShowModal } = useModalControl()
    const { userData, loading, getUserData, setUserData } = useUserInfo(user.id)

    const handleGetData = useCallback((id) => getUserData({ id }), [getUserData]);

    const handleOpenModal = (id) => {
        if (id <= 12) handleGetData(id)
        else setUserData(user)
        setShowModal(true)
    }

    return (
        <View style={styles.container}>
            {
                user.img
                    ? (<Image style={styles.image} source={{ uri: user.img }} />)
                    : (<DefaultIcon />)
            }

            <View style={styles.secondContainer}>
                <Text style={styles.txt}>
                    {user.name}
                </Text>
                <TouchableOpacity onPress={() => handleOpenModal(user.id)}>
                    <Text style={styles.btnText}>
                        Ver Detalles
                    </Text>
                </TouchableOpacity>
            </View>
            {
                loading ? (<ActivityIndicator />)
                    : (
                        <UserDetails
                            visible={showModal}
                            closer={() => setShowModal(false)}
                            user={userData}
                        />
                    )
            }
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: Mixins.scaleSize(120),
        marginVertical: 5,
        borderColor: Colors.GRAY,
        borderWidth: 0.5,
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },
    image: {
        width: Mixins.scaleSize(100),
        height: Mixins.scaleSize(100),
        borderRadius: 50,
    },
    txt: { ...GlobalStyle.style.text },
    secondContainer: {
        height: '100%',
        justifyContent: 'space-evenly',
        marginHorizontal: Mixins.scaleSize(20),
    },
    btnText: { ...GlobalStyle.style.underlineText },
});