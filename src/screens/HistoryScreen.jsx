import React from "react";
import { Image, Text, View } from "react-native";

const HistoryScreen = () => {
  return (
    <View className="bg-white flex-1">
      <View className="items-center">
        <Image
          className="w-56 h-56"
          source={{
            uri: "https://defensacivil.gob.do/images/slide/2021/logoNuevoDefensa.png",
          }}
        />
      </View>
      <Text className="font-bold text-2xl text-center">Historia</Text>
      <Text className="m-2">
        Antes del año 1966, cuando llegaba la temporada de huracanes, un grupo
        de radioaficionados se reunía en la Cruz Roja para estar atentos por si
        surgía algún tipo de emergencia, inmediatamente ponerse a disposición y
        ayudar en todo lo posible, inclusive, usando sus propios equipos de
        comunicación para así tener contacto con el exterior en caso de que las
        redes telefónicas resultaran afectadas.
      </Text>
      <Text className="m-2">
        Al surgir el triunvirato fue designado el Dr. Rafael Cantizano Arias,
        como presidente de la Cruz Roja y al mismo tiempo nombraron al Ing.
        Carlos D' Franco como director de la Defensa Civil, quien con un grupo
        compuesto por seis personas, se instaló en la calle Francia esquina
        Galván, siendo esa la primera oficina de la Defensa Civil.
      </Text>
      <Text className="m-2">
        Al surgir el Gobierno Provisional, presidido por el Dr. Héctor García
        Godoy, a los diecisiete días del mes de junio de 1966, fue promulgada la
        Ley 257, mediante la cual fue creada la Defensa Civil, institución
        dependiente de la Secretaría Administrativa de la Presidencia (ahora
        Ministerio de la Presidencia) y quien en la actualidad preside la
        Comisión Nacional de Emergencias.
      </Text>
    </View>
  );
};

export default HistoryScreen;
