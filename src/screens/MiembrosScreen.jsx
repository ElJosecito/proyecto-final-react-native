import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const MiembrosScreen = () => {
  const [miembros, setMiembros] = useState([]);

  useEffect(() => {
    fetchMiembros();
  }, []);

  const fetchMiembros = async () => {
    try {
      const response = await fetch('https://adamix.net/defensa_civil/def/miembros.php');
      const data = await response.json();
      if (data.exito) {
        setMiembros(data.datos);
      } else {
        console.error('Error al obtener los miembros:', data.mensaje);
      }
    } catch (error) {
      console.error('Error al obtener los miembros:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Miembros de la Defensa Civil</Text>
      {miembros.map((miembro) => (
        <View key={miembro.id} style={styles.miembroContainer}>
          <Image source={{ uri: miembro.foto }} style={styles.foto} />
          <View style={styles.textContainer}>
            <Text style={styles.nombre}>{miembro.nombre}</Text>
            <Text style={styles.cargo}>{miembro.cargo}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  miembroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cargo: {
    fontSize: 16,
  },
});

export default MiembrosScreen;
