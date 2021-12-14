import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native'
import { Card } from 'react-native-elements';
import { ApiContext } from '../Context/ApiContext';
import React, { useContext } from 'react';


const DiaScreen = ({navigation}) => {
 const { frase } = useContext(ApiContext);
  return (
 <View style={styles.container}>
    <Card>
    <Text style={{ fontWeight: "bold", fontSize: 20, color:'#D8BAFC'}}>Frase Motivacional del Día</Text>
    <Card.Divider/>
      {frase.map((f) =>
        <Text >{f.q}</Text>
      )}
    </Card>
    <Image source={require('../Imagenes/mot.jpg')}
            style = {{width: 250, height: 380, margin: 20}}/>
  </View>
    );
}
export default DiaScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#D8BAFC',
      alignItems: 'center',
      justifyContent: 'space-around',
      textAlign: 'center', 
    },
});