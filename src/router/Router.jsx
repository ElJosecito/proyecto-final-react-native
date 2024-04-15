import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
//screens
import NoticiasScreen from "../screens/NoticiasScreen";
import VideosScreen from "../screens/VideoScreen";
import AlberguesScreen from "../screens/AlberguesScreen";
import MapsAlbergue from "../screens/MapsAlbergue";
import MiembrosScreen from "../screens/MiembrosScreen";
import MedidasPreventivasScreen from "../screens/MedidasPreventivasScreen";
import VolunteerForm from "../screens/VolunteerForm";
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

                    {/* ruta de noticias */}
                    <Stack.Screen
                        name="Noticias"
                        component={NoticiasScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    {/* ruta de videos */}
                    <Stack.Screen
                        name="Videos"
                        component={VideosScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    {/* ruta de albergues */}
                    <Stack.Screen
                        name="Albergues"
                        component={AlberguesScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    {/* ruta de mapa de albergues */}
                    <Stack.Screen
                        name="MapaAlbergues"
                        component={MapsAlbergue}
                        options={{
                            headerShown: false,
                        }}
                    />

                    {/* ruta de miembros */}
                    <Stack.Screen
                        name="Miembros"
                        component={MiembrosScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    {/* ruta de medidas preventivas */}
                    <Stack.Screen
                        name="MedidasPreventivas"
                        component={MedidasPreventivasScreen}
                        options={{
                            headerShown: false,
                        }}
                    />

                    {/* VolunteerForm */}
                    <Stack.Screen
                        name="VolunteerForm"
                        component={VolunteerForm}
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
