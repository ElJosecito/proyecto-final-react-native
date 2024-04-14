import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const AlberguesScreen = () => {
  const [albergues, setAlbergues] = useState([]);

  useEffect(() => {
    fetchAlbergues();
  }, []);

  const fetchAlbergues = async () => {
    try {
      const response = await fetch('https://adamix.net/defensa_civil/def/albergues.php');
      const data = await response.json();
      if (data.exito) {
        setAlbergues(data.datos);
      } else {
        console.error('Error al obtener los albergues:', data.mensaje);
      }
    } catch (error) {
      console.error('Error al obtener los albergues:', error);
    }
  };

  const renderAlbergueItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.ciudad}>{item.ciudad}</Text>
      <Text style={styles.edificio}>{item.edificio}</Text>
      <Text style={styles.coordinador}>Coordinador: {item.coordinador}</Text>
      <Text style={styles.telefono}>Teléfono: {item.telefono}</Text>
      <Text style={styles.capacidad}>Capacidad: {item.capacidad}</Text>
    </View>
  );

  return (
    <FlatList
      data={albergues}
      renderItem={renderAlbergueItem}
      keyExtractor={(item) => item.codigo}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  ciudad: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  edificio: {
    fontSize: 16,
    marginBottom: 5,
  },
  coordinador: {
    marginBottom: 3,
  },
  telefono: {
    marginBottom: 3,
  },
  capacidad: {
    marginBottom: 3,
  },
});

export default AlberguesScreen;
