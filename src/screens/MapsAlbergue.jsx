import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

const MapsAlbergue = () => {
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

  const renderCallout = (albergue) => (
    <Callout>
      <View>
        <Text>{albergue.ciudad}</Text>
        <Text>{albergue.edificio}</Text>
        <Text>Coordinador: {albergue.coordinador}</Text>
        <Text>Teléfono: {albergue.telefono}</Text>
        <Text>Capacidad: {albergue.capacidad}</Text>
      </View>
    </Callout>
  );

  return (
    <MapView style={styles.map} initialRegion={{ latitude: 18.4854, longitude: -69.9296, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
      {albergues.map((albergue, index) => (
        <Marker key={index} coordinate={{ latitude: parseFloat(albergue.lat), longitude: parseFloat(albergue.lng) }}>
          {renderCallout(albergue)}
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapsAlbergue;
