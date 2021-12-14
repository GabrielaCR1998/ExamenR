import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native'
import { Card, Header } from 'react-native-elements';
import { ApiContext } from '../Context/ApiContext';
import React, { useContext } from 'react';

const AleaScreen = ({ navigation }) => {
  const { frase } = useContext(ApiContext);
  return (
 <View style={styles.container}>
    <Card>
    <Text style={{ fontWeight: "bold", fontSize: 19, color:'#D8BAFC'}}>Frase Motivacional Aleatoria</Text>
    <Card.Divider/>
      {frase.map((f) =>
        <Text >{f.q}</Text>
      )}
    </Card>
    <Image source={require('../Imagenes/che.jpg')}
    style = {{width: 250, height: 380, margin: 20}}/>
  </View>
    );
}
export default AleaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8BAFC',
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center', 
  },
});