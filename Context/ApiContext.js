import React, { createContext, useState } from 'react';
import { Text, View, StyleSheet, Button, StatusBar} from "react-native";

export const ApiContext = createContext();

const Apiprovider = (props) => {
  const [frase, setFrase] = useState([]);

  const buscar = (mode) => {
    const api_url = `https://zenquotes.io/api/${mode}`;
    fetch(api_url)
      .then((data) => {
        return data.json();
      })
      .then((mostrar) => {
        console.log(mostrar);
        setFrase(mostrar);
      });
  };
  return (
    <ApiContext.Provider
      value={{
        frase,
        buscar,
      }}>
      {props.children}
    </ApiContext.Provider>
  );
};
export default Apiprovider;