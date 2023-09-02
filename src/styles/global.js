import { StyleSheet, StatusBar } from 'react-native';
import { viewportHeight, viewportWidth } from './mixins';

export const style = StyleSheet.create({
    mainContainer: {
        marginTop: StatusBar.currentHeight,
        width: viewportWidth(100),
        height: viewportHeight(100),
    },
    screenContainer: {
        width: '100%',
        height: '100%',
    },
    body: {
        flex: 1,
        paddingHorizontal: viewportWidth(5),
    },
    borderRef: {
        borderColor: '#FF0000',
        borderWidth: 1.5,
    },
});