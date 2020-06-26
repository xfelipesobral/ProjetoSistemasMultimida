import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MapView, { Marker, Circle } from 'react-native-maps';

import styles from '../../styles/global';

import logo from '../../../assets/icon.png';

export default function Master({ navigation }) {

    const [mensagem, setMensagem] = useState('')
    const [pontos, setPontos] = useState([
        { latitude: -24.2950753, longitude: -53.8420653, titulo: 'UFPR', index: 1 },
        { latitude: -24.2866378, longitude: -53.8429179, titulo: 'UFPR', index: 2 },
        { latitude: -24.2888868, longitude: -53.8326186, titulo: 'UFPR', index: 3 },
    ])

    return (
        // <View style={styles.bodyAzul}>

        //     {/* <Image source={logo} style={styles.logo} />
        //     <Text style={styles.textoMaster}>Digite um texto:</Text>

        //     <TextInput
        //         value={mensagem}
        //         onChangeText={x => setMensagem(x)}
        //         style={styles.inputTexto}
        //     />

        //     <TouchableOpacity onPress={() => alert(mensagem)} style={{backgroundColor: '#fff', borderRadius: 20, padding: 20, marginTop: 10}}>
        //         <MaterialCommunityIcons name='console' size={24} color='#000' />
        //     </TouchableOpacity> */}

        // </View>
        <>  
            <View style={{position: 'absolute', zIndex: 2, bottom: 40, right: 20, alignItems: 'center'}}>
                <Text>UFPR</Text>
                <Text>Mapa teste</Text>
            </View>
            <MapView style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                flex: 1
            }} mapType='standard' initialRegion={{
                latitude: -24.2935978,
                longitude: -53.8436113,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
                onPress={e => {
                    setPontos([...pontos, { latitude: e.nativeEvent.coordinate.latitude, longitude: e.nativeEvent.coordinate.longitude, titulo: 'UFPR', index: e.timeStamp }])
                }}>

                {
                    pontos.map(p => {
                        return (
                            <Circle key={p.index}
                                center={{ latitude: p.latitude, longitude: p.longitude }}
                                radius={100} fillColor='#f5724e60' strokeColor='#f5724e' />
                        )
                    })
                }

            </MapView>
        </>
    )
}