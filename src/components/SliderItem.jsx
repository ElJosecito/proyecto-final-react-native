import React from "react";
import { View, Text, useWindowDimensions, Image } from "react-native";

const SliderItem = ({ item }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <View
        style={{ width, height }}
        className="justify-start items-center pt-10"
      >
        <Text className="font-bold text-2xl text-center text-green p-10">
          {item.title}
        </Text>
        <Image
          source={item.img}
          style={{ width: 320, height: 400 }}
          className="rounded-lg"
        />
      </View>
    </View>
  );
};

export default SliderItem;
