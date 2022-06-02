import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Jogos Legais</Text>
      <StatusBar style="auto" />
      <Text style={estilo.jogo}>  Guardians of the galaxy  </Text>
      <Image style={estilo.img} source={require("./assets/imagem1.jpg")}/>

      <Text style={estilo.jogo}>  Assassins Creed  </Text>
      <Image style={estilo.img} source={require("./assets/imagem2.jpg")}/>

      <Text style={estilo.jogo}>  God of War  </Text>
      <Image style={estilo.img} source={require("./assets/image4.jpg")}/>
    </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCAB10',
    alignItems: 'center',
  },
  titulo:{
    fontSize:40,
    marginTop:40,
    
  },
  img:{
    width:380,
    height:200,
    borderRadius: 20,
  },
  jogo:{
    marginTop:15,
    marginBottom:15,
    fontSize:22,
    backgroundColor:"white",
    borderRadius: 20,
    borderColor:"red"
    
  }
});
