import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const inputDefault = {
    borderWidth: 1,
    padding: 8,
    margin: 5,
    borderRadius: 10,
}

export default StyleSheet.create({

    body: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },

    bodyAzul: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#007bff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 150,
        height: 150,
        marginBottom: 30,
        resizeMode: 'stretch',
    },

    textoMaster: {
        fontSize: 18,
        color: '#fff',
    },

    inputTexto: {
        ...inputDefault,
        width: 300,
        backgroundColor: '#fff',
        borderColor: '#c9c9c9',
    },

    inputTextoFocus: {
        ...inputDefault,
        borderColor: '#000',
    },

    inputLabel: {
        marginHorizontal: 5,
        color: '#636363'
    },

    linha: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    btnVerde: {
        backgroundColor: '#508E52',
        padding: 15,
    },

    btnVerdeTxt: {
        color: '#fff',
    },

    modalLoad: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000040'
      },

    modalLoadContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 50,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },

    modalLoadText: {
        fontSize: 16,
        marginTop: 20,
    },

    modalaLoadFechar: {
        backgroundColor: '#424242',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
        elevation: 10,
    },

    queryFundo: {
        flex: 1,
        backgroundColor: '#ededed',
    },
    
    queryFechar: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    queryTitulo: {
        fontSize: 32,
        fontWeight: '100',
        textAlign: 'center',
    },

    queryTopo: {
        marginVertical: 15,
    }

});