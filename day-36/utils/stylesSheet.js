import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 25,
        flex: 1
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    heading: {
        fontSize: 20,
        fontWeight: 'bold',

    },

    textGreen: {
        color: 'green'
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 2,
    },

    loading: {
        opacity: 0.5
    },


    bgGreen: {
        backgroundColor: 'green'
    },
    bgRed: {
        backgroundColor: 'red'
    },
    bgBlue: {
        backgroundColor: 'blue'
    },

    fullWidth: {
        width: '100%'
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    inputField: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15
    }
})