import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const MedidasPreventivasScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Medidas Preventivas</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Lavado de manos frecuente</Text>
        <Text>- Lávate las manos con agua y jabón durante al menos 20 segundos.</Text>
        <Text>- Utiliza desinfectante de manos a base de alcohol si no hay agua y jabón disponibles.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Uso de mascarilla</Text>
        <Text>- Usa una mascarilla que cubra tu nariz y boca cuando estés en lugares públicos o cerca de personas que no vivan en tu hogar.</Text>
        <Text>- Asegúrate de que la mascarilla se ajuste bien a tu rostro y cubra completamente la nariz y la boca.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Distanciamiento social</Text>
        <Text>- Mantén al menos 2 metros de distancia entre tú y otras personas que no vivan en tu hogar.</Text>
        <Text>- Evita las reuniones en grandes grupos y los lugares concurridos.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>4. Evitar tocarse la cara</Text>
        <Text>- Evita tocarte la cara, especialmente los ojos, la nariz y la boca, con las manos sin lavar.</Text>
        <Text>- Lávate las manos con agua y jabón antes de tocarte la cara.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>5. Limpiar y desinfectar</Text>
        <Text>- Limpia y desinfecta con frecuencia las superficies de alto contacto en tu hogar y lugar de trabajo.</Text>
        <Text>- Utiliza desinfectantes domésticos comunes para matar virus en las superficies.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MedidasPreventivasScreen;
