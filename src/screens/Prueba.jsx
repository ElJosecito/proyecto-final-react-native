import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Prueba = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Noticias")}
      >
        <Text style={styles.buttonText}>Ir a Noticias</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Videos")}
      >
        <Text style={styles.buttonText}>Ir a Videos</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Albergues")}
      >
        <Text style={styles.buttonText}>Ir a Albergues</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("MapaAlbergues")}
      >
        <Text style={styles.buttonText}>Ir a Mapa de Albergues</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Miembros")}
      >
        <Text style={styles.buttonText}>Ir a Miembros</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("MedidasPreventivas")}
      >
        <Text style={styles.buttonText}>Ir a Medidas Preventivas</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("VolunteerForm")}
      >
        <Text style={styles.buttonText}>Ir a Contacto</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Servicios")}
      >
        <Text style={styles.buttonText}>Ir a Servicios</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Prueba;
