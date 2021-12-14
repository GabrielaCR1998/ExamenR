import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1';
import Apiprovider from './Context/ApiContext';


export default function App() {
  return (
    <Apiprovider>
      <NavigationContainer>
        <StackNavigation1/>
      </NavigationContainer>
    </Apiprovider>
  );
}

