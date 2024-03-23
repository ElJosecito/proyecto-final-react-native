import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
//screens
import Prueba from "../screens/Prueba";

//navigators
import BottomNav from "./navigators/BottomNav";

//safe area
import { useSafeAreaInsets } from "react-native-safe-area-context";

//create stack
const Stack = createStackNavigator();

const Routes = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex: 1, paddingTop: insets.top }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="bottom nav"
                        component={BottomNav}
                        options={{
                            headerShown: false,
                        }}
                    />

                    {/* ruta de prueba */}
                    <Stack.Screen
                        name="details"
                        component={Prueba}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};

export default Routes;
