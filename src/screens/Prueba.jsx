import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'


//componente de prueba
const Prueba = () => {
  const navigation = useNavigation()

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Prueba</Text>

      <Pressable
        onPress={() => {
          navigation.navigate('Noticias')
        }}
      >
        <Text>Ir a noticias</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate('Videos')
        }}
      >
        <Text>Ir a videos</Text>
      </Pressable>


      <Pressable
        onPress={() => {
          navigation.navigate('Albergues')
        }}
      >
        <Text>Ir a albergues</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate('MapaAlbergues')
        }}
      >
        <Text>Ir a mapa de albergues</Text>
      </Pressable>

      <Pressable

        onPress={() => {
          navigation.navigate('Miembros')
        }
        }
      >
        <Text>Ir a miembros</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate('MedidasPreventivas')
        }}
      >
        <Text>Ir a medidas preventivas</Text>
      </Pressable>



    </View>
  )
}

export default Prueba