import VolunteerForm from '../../components/VolunteerForm';
import About from '../../components/About';
import ReportSituation from '../../components/ReportSituation';
import SpecificNews from '../../components/SpecificNews';
import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Prueba from "../../screens/Prueba";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
      {}
      <Tab.Screen
        name="Home"
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
                name="home"
                size={focused ? 28 : 24}
                color={focused ? "white" : "grey"}
              />
            </View>
          ),
        }}
          />

          {}
          <Tab.Screen
              name="VolunteerForm"
              component={VolunteerForm}
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
                              name="user-plus"
                              size={focused ? 28 : 24}
                              color={focused ? "white" : "grey"}
                          />
                      </View>
                  ),
              }}
          />

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
                              name="info-circle"
                              size={focused ? 28 : 24}
                              color={focused ? "white" : "grey"}
                          />
                      </View>
                  ),
              }}
          />

          <Tab.Screen
              name="ReportSituation"
              component={ReportSituation}
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
                              name="exclamation-triangle"
                              size={focused ? 28 : 24}
                              color={focused ? "white" : "grey"}
                          />
                      </View>
                  ),
              }}
          />

          <Tab.Screen
              name="SpecificNews"
              component={SpecificNews}
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
                              name="newspaper-o"
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
