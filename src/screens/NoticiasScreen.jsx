import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const NoticiasScreen = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetchNoticias();
  }, []);

  const fetchNoticias = async () => {
    try {
      const response = await fetch('https://adamix.net/defensa_civil/def/noticias.php');
      const data = await response.json();
      if (data.exito) {
        setNoticias(data.datos);
      } else {
        console.error('Error al obtener las noticias:', data.mensaje);
      }
    } catch (error) {
      console.error('Error al obtener las noticias:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {noticias.map((noticia) => (
        <View key={noticia.id} style={styles.noticiaContainer}>
          <Image source={{ uri: noticia.foto }} style={styles.imagen} />
          <Text style={styles.titulo}>{noticia.titulo}</Text>
          <Text style={styles.fecha}>{noticia.fecha}</Text>
          <Text style={styles.contenido}>{noticia.contenido}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  noticiaContainer: {
    marginBottom: 20,
  },
  imagen: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  fecha: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  contenido: {
    fontSize: 16,
  },
});

export default NoticiasScreen;
