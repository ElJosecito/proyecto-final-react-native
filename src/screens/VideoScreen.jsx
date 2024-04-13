import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Video } from 'expo-av';

const VideosScreen = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('https://adamix.net/defensa_civil/def/videos.php');
      const data = await response.json();
      if (data.exito) {
        setVideos(data.datos);
      } else {
        console.error('Error al obtener los videos:', data.mensaje);
      }
    } catch (error) {
      console.error('Error al obtener los videos:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {videos.map((video) => (
        <View key={video.id} style={styles.videoContainer}>
          <Video
            source={{ uri: `https://www.youtube.com/watch?v=${video.link}` }}
            style={styles.video}
            useNativeControls
            resizeMode="contain"
            isLooping
            shouldPlay={false}
          />
          <Text style={styles.titulo}>{video.titulo}</Text>
          <Text style={styles.descripcion}>{video.descripcion}</Text>
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
  videoContainer: {
    marginBottom: 20,
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 16,
  },
});

export default VideosScreen;
