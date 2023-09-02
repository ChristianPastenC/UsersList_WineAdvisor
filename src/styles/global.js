import { StyleSheet, StatusBar } from 'react-native';
import { viewportHeight, viewportWidth } from './mixins';
import { BACKGROUND, WHITE } from './colors';
import { SIZE_24, BOLD, SIZE_16, REGULAR, MEDIUM } from './fonts';

export const style = StyleSheet.create({
    mainContainer: {
        marginTop: StatusBar.currentHeight,
        width: viewportWidth(100),
        height: viewportHeight(100),
        backgroundColor: BACKGROUND,
    },
    screenContainer: {
        width: '100%',
        height: '100%',
    },
    body: {
        flex: 1,
        paddingHorizontal: viewportWidth(5),
        paddingVertical: viewportHeight(2),
        backgroundColor: WHITE,
        borderTopWidth: 0,
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
    },
    borderRef: {
        borderColor: '#FF0000',
        borderWidth: 1.5,
    },
    header: {
        alignItems: 'center',
        flex: 0.15,
        justifyContent: 'center',
    },
    headerTxt: {
        fontSize: SIZE_24,
        fontFamily: BOLD,
        color: WHITE,
    },
    text: {
        fontSize: SIZE_16,
        fontFamily: REGULAR,
    },
    underlineText: {
        color: BACKGROUND + '80',
        fontFamily: MEDIUM,
        textDecorationLine: 'underline',
        
    },
});