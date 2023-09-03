import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Mixins, Colors } from '../styles'
import { AntDesign } from '@expo/vector-icons'

const DefaultIcon = ({ otherStyle = {} }) => {
    return (
        <View style={[style.container, otherStyle]}>
            <AntDesign
                name='user'
                size={48}
                color={Colors.WHITE}
            />
        </View>
    )
}
export default DefaultIcon;

const style = StyleSheet.create({
    container: {
        width: Mixins.scaleSize(100),
        height: Mixins.scaleSize(100),
        borderRadius: 50,
        backgroundColor: Colors.GRAY,
        alignItems: 'center',
        justifyContent: 'center'
    }
})