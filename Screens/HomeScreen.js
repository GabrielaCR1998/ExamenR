import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useContext }  from 'react';
import { ApiContext } from '../Context/ApiContext';

const HomeScreen = ({navigation}) => {
   const {buscar} = useContext(ApiContext);
    return (
        <View style={styles.container}>
            <Image source={require('../Imagenes/frase.png')}
            style = {{width: 350, height: 280}}/>
            <Button 
                title="Frase del Día"
                onPress={()=>{buscar('today');navigation.navigate('DiaScreen')}}
            />
            <Button 
                title="Frase Aleatoria"
                onPress={()=>{buscar('random'); navigation.navigate('AleaScreen')}}
            />
            <Button 
                title="Conjunto de frases"
                onPress={()=>{buscar('quotes'); navigation.navigate('ConScreen');}}
            />
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D8BAFC',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});