import { FlatList, View } from "react-native";
import SliderItem from "./SliderItem";

export default function Slider() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <FlatList
        data={data}
        renderItem={({ item }) => <SliderItem item={item} />}
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const data = [
  {
    id: 1,
    title:
      "Defensa Civil recupera los cuerpos de tres personas desaparecidas en playa “El Bronx”",
    img: require("../assets/accion_1.jpeg"),
  },
  {
    id: 2,
    title: "Defensa Civil localiza personas en montañas y zonas boscosas.",
    img: require("../assets/accion_2.jpg"),
  },
];
