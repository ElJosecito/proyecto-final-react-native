import React from "react";
import { Text, View } from "react-native";
import Slider from "../components/Slider";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Slider />
    </View>
  );
};

export default HomeScreen;
