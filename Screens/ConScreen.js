import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native'
import { Card, Header } from 'react-native-elements';
import { ApiContext } from '../Context/ApiContext';
import React, { useContext } from 'react';

const ConScreen = ({navigation}) => {
    const { frase } = useContext(ApiContext);
  return (
 <View style={styles.container}>
    <Card>
    <Text style={{ fontWeight: "bold", fontSize: 16, color:'#D8BAFC'}}>Multiples Frases Motivacionales </Text>
    <Card.Divider/>
      {frase.map((f) =>
        <Text >{f.q}</Text>
      )}
    </Card>
    <Image source={require('../Imagenes/fra.jpg')}
    style = {{width: 250, height: 380, margin: 20}}/>
  </View>
    );
}
export default ConScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D8BAFC',
      alignItems: 'center',
      justifyContent: 'space-around',
      textAlign: 'center', 
    },
});