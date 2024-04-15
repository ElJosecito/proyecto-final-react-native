import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Prueba from "../../screens/Prueba";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeScreen from "../../screens/HomeScreen";
import HistoryScreen from "../../screens/HistoryScreen";
import About from "../../screens/About";


const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="home"
                size={focused ? 28 : 24}
                color={focused ? "white" : "grey"}
              />
            </View>
          ),
        }}
      />
      {/* hamburger item */}
      <Tab.Screen
        name="Prueba"
        component={Prueba}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="bars"
                size={focused ? 28 : 24}
                color={focused ? "white" : "grey"}
              />
            </View>
          ),
        }}
      />
      {/* history item */}
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="history"
                size={focused ? 28 : 24}
                color={focused ? "white" : "grey"}
              />
            </View>
          ),
        }}
      />

      {/* about icon */}
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <FontAwesome
                name="info"
                size={focused ? 28 : 24}
                color={focused ? "white" : "grey"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: "#00582F",
  },
});
