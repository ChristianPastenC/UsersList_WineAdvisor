import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Mixins, Colors, GlobalStyle, } from '../styles'

const UserCard = ({ user }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: user.avatar }}
            />
            <View style={styles.secondContainer}>
                <Text style={styles.txt}>
                    {user.first_name + " " + user.last_name}
                </Text>
                <TouchableOpacity>
                    <Text style={styles.btnText}>
                        Ver Detalles
                    </Text>
                </TouchableOpacity>
            </View>
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