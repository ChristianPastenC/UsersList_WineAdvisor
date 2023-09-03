import React from 'react'
import { Modal, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import DefaultIcon from './DefaultIcon'
import { MaterialIcons } from '@expo/vector-icons'
import { Mixins, Colors, GlobalStyle } from '../styles'

const UserDetails = ({ visible = true, closer = () => { }, user = {} }) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
            onRequestClose={() => closer()}
        >
            <View style={style.container}>
                <TouchableOpacity onPress={() => closer()}>
                    <MaterialIcons name='arrow-back-ios' size={Mixins.scaleSize(32)} color={Colors.WHITE} />
                </TouchableOpacity>
                <View style={style.profile}>
                    {
                        user.img
                            ? (<Image style={style.picture} source={{ uri: user.img }} />)
                            : (<DefaultIcon otherStyle={style.picture} />)
                    }
                    <Text style={style.name}>
                        {user.name}
                    </Text>
                    <View style={style.mailContainer}>
                        <MaterialIcons name='mail-outline' size={24} color='black' />
                        <Text style={style.email}>
                            {user.email}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={style.secondContainer}>
                <Text style={style.loremText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit egestas dui id ornare arcu odio ut. Aliquam faucibus purus in massa tempor. Vitae aliquet nec ullamcorper sit amet risus nullam. Gravida neque convallis a cras. Vitae suscipit tellus mauris a diam. Placerat in egestas erat imperdiet sed euismod nisi. Elit at imperdiet dui accumsan sit amet nulla.
                </Text>
            </View>
        </Modal>
    )
}

export default UserDetails

const style = StyleSheet.create({
    container: {
        ...GlobalStyle.style.body,
        backgroundColor: Colors.BACKGROUND,
    },
    profile: {
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: Mixins.viewportHeight(35),
        marginTop: Mixins.scaleSize(40),
        marginHorizontal: Mixins.scaleSize(15),
        shadowColor: Colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        borderWidth: 1,
    },
    picture: {
        width: Mixins.scaleSize(150),
        height: Mixins.scaleSize(150),
        borderRadius: 90,
        bottom: Mixins.scaleSize(50),
        borderColor: Colors.WHITE,
        borderWidth: 3,
    },
    secondContainer: {
        flex: 2.5,
        backgroundColor: Colors.WHITE,
        zIndex: -1,
    },
    name: {
        ...GlobalStyle.style.headerTxt,
        color: Colors.BLACK,
    },
    email: {
        ...GlobalStyle.style.text,
        ...GlobalStyle.style.underlineText,
        color: Colors.BLACK + '80',
    },
    mailContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-evenly',
        width: '75%',
    },
    loremText: {
        ...GlobalStyle.style.text,
        padding: 20,
        marginVertical: '30%'
    }
});