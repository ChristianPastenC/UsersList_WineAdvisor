import React from 'react'
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Mixins, Colors } from '../styles'

const UserDetails = ({
    visible = true,
    closer = () => { return },
    user = {}
}) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
            onRequestClose={() => closer(false)}
        >
            <View style={style.container}>
                <TouchableOpacity>
                    <MaterialIcons name='close' size={Mixins.scaleSize(32)} />
                </TouchableOpacity>
                <Text>{JSON.stringify(user)}</Text>
            </View>
        </Modal>
    )
}

export default UserDetails

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        height: Mixins.viewportHeight(100),
        width: Mixins.viewportWidth(100),
        borderRadius: 15,
        alignSelf: 'center',
    }
});