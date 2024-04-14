import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

const ServiceItem = (itemData) => {
  return (
    <View className="m-5 border-1 border-green">
      <Text className="font-bold text-xl mb-1">{itemData.item.nombre}</Text>
      <Text className="mb-1">{itemData.item.descripcion}</Text>
      <Image
        className="h-40 w-40 rounded-lg"
        source={{ uri: itemData.item.foto }}
      />
    </View>
  );
};

const ServicesScreen = () => {
  const [servicios, setServicios] = useState([]);

  async function getServices() {
    const response = await fetch(
      "https://adamix.net/defensa_civil/def/servicios.php"
    );
    const data = await response.json();
    setServicios(data.datos);
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <View className="bg-white flex-1">
      <Text className="text-center m-4 text-2xl font-bold">Servicios</Text>
      <View className="mb-40">
        <FlatList
          data={servicios}
          keyExtractor={(item) => item.id}
          renderItem={ServiceItem}
        />
      </View>
    </View>
  );
};

export default ServicesScreen;
