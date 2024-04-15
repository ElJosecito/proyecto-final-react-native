import React from "react";
import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de</Text>
      <Text style={styles.description}>
        Esta aplicacion fue desarrollada por un equipo de estudiantes del
        Instituto Tecnologico de las Americas (ITLA) con el objetivo de brindar
        informacion y servicios esenciales.
      </Text>
      <Text style={styles.sectionTitle}>Equipo de desarrollo</Text>
      <View style={styles.developersContainer}>
        <Text style={styles.developer}>Arnold Alexis Polemil Alvarez</Text>
        <Text style={styles.developer}>Maria Isabel Guzman Vallejo</Text>
        <Text style={styles.developer}>Jose Miguel Martinez Florimon</Text>
        <Text style={styles.developer}>Adrian Jose De Jesus Eusebio</Text>
      </View>
      <Text style={styles.contact}>Contacto: info@defensacivil.gob.do</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  developersContainer: {
    marginBottom: 20,
  },
  developer: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  contact: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});

export default About;
