import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const produtosData = {
  "produtos": [
    { "id": 1, "nome": "Cupim", "imgSrc": "https://raw.githubusercontent.com/annecarrero/imagens-bomboidi/main/cupim.jpg" },
    { "id": 2, "nome": "Patinho", "imgSrc": "https://raw.githubusercontent.com/annecarrero/imagens-bomboidi/main/patinho.jpg" },
    { "id": 3, "nome": "Picanha", "imgSrc": "https://raw.githubusercontent.com/annecarrero/imagens-bomboidi/main/picanha.jpg" },
    { "id": 4, "nome": "Pé de Galinha", "imgSrc": "https://raw.githubusercontent.com/annecarrero/imagens-bomboidi/main/pedegalinha.png" }
  ]
};

const Product = ({ imgSrc, title }) => (
  <View style={styles.productContainer}>
    <Image source={{ uri: imgSrc }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const sharedStyles = StyleSheet.create({
  navItem: {
    fontSize: 18,
    color: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});



function Menu({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProdutos, setFilteredProdutos] = useState([]);

  useEffect(() => {
    setProdutos(produtosData.produtos);
    setFilteredProdutos(produtosData.produtos);
  }, []);

  useEffect(() => {
    const filtered = produtos.filter(
      (produto) => produto.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProdutos(filtered);
  }, [searchQuery, produtos]);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container9}>
    <View style={styles.header1}>
      <Text style={styles.headerText1}>BOMBOIDI®</Text>
    </View>
    <View style={styles.nav1}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.navItem1}>INÍCIO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
        <Text style={styles.navItem1}>CONTATO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
        <Text style={styles.navItem1}>RESERVA</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.navItem1}>CARDÁPIO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Localizacao')}>
        <Text style={styles.navItem1}>LOCALIZAÇÃO</Text>
      </TouchableOpacity>
    </View>
      <View style={styles.searchSectio8n}>
        <TextInput
          style={styles.input8}
          placeholder="Pesquisar produto"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.main8}>
        <View style={styles.menuSection8}>
          {filteredProdutos.map((produto) => (
            <Product key={produto.id} imgSrc={produto.imgSrc} title={produto.nome} />
          ))}
        </View>
      </View>
    </View>
  );
}


function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://conteudo.solutudo.com.br/wp-content/uploads/2022/06/churrascarias-em-lins.jpg' }}
      style={styles.backgroundImage13}
    >
      <View style={styles.overlay13}>
        <View style={styles.nav13}>
          <Text style={styles.logo13}>CHURRASCARIA BOMBOIDI</Text>
        </View>
        <View style={styles.content13}>
          <View style={styles.menu13}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.navItem13}>INÍCIO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
              <Text style={styles.navItem13}>CONTATO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
              <Text style={styles.navItem13}>RESERVA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
              <Text style={styles.navItem13}>CARDÁPIO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Localizacao')}>
              <Text style={styles.navItem13}>LOCALIZAÇÃO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.about13}>
            <Text style={styles.aboutTitle13}>TRADIÇÃO EM CHURRASCO</Text>
            <Text style={styles.aboutText13}>Experiência autêntica e sabor inigualável. Venha nos visitar e desfrute de um verdadeiro churrasco.</Text>
          </View>
        </View>
        <Image
          source={{ uri: 'https://example.com/foto.jpg' }}
          style={styles.foto13}
        />
      </View>
    </ImageBackground>
  );
}

function Reservas({ navigation }) {
  return (
    <View style={styles.container9}>
      <View style={styles.header1}>
        <Text style={styles.headerText1}>BOMBOIDI®</Text>
      </View>
      <View style={styles.nav1}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem1}>INÍCIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
          <Text style={styles.navItem1}>CONTATO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
          <Text style={styles.navItem1}>RESERVA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.navItem1}>CARDÁPIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Localizacao')}>
          <Text style={styles.navItem1}>LOCALIZAÇÃO</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{ uri: 'https://conteudo.solutudo.com.br/wp-content/uploads/2022/06/churrascarias-em-lins.jpg' }}
        style={styles.backgroundImage1}
      >
        <View style={styles.container1}>
          <View style={styles.content1}>
            <View style={styles.form1}>
              <Text style={styles.label1}>NOME:</Text>
              <TextInput style={styles.input1} placeholder="Nome" />

              <Text style={styles.label1}>DATA:</Text>
              <TextInput style={styles.input1} placeholder="Data" />

              <Text style={styles.label1}>RESERVAS:</Text>
              <TextInput style={styles.input1} placeholder="Reservas" />

              <Text style={styles.label1}>HORÁRIO:</Text>
              <TextInput style={styles.input1} placeholder="Horário" />

              <TouchableOpacity style={styles.button1} onPress={() => { }}>
                <Text style={styles.buttonText1}>Faça sua reserva já</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.footer1}>
        <Text style={styles.footerText1}>© 2024 BOMBOIDI. Todos os direitos reservados.</Text>
      </View>
    </View>
  );
}

function Contato({ navigation }) {
  return (
    <View style={styles.container9}>
    <View style={styles.header1}>
      <Text style={styles.headerText1}>BOMBOIDI®</Text>
    </View>
    <View style={styles.nav1}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.navItem1}>INÍCIO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
        <Text style={styles.navItem1}>CONTATO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
        <Text style={styles.navItem1}>RESERVA</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.navItem1}>CARDÁPIO</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Localizacao')}>
        <Text style={styles.navItem1}>LOCALIZAÇÃO</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.backgroundImage3}>
      <View style={styles.contact3}>
        <View style={styles.formGroup3}>
          <Text style={styles.label3}>Email:</Text>
          <TextInput style={styles.input3} keyboardType="email-address" placeholder="Email" />
        </View>
        <View style={styles.formGroup3}>
          <Text style={styles.label3}>Nome:</Text>
          <TextInput style={styles.input3} placeholder="Nome" />
        </View>
        <View style={styles.formGroup3}>
          <Text style={styles.label3}>Telefone:</Text>
          <TextInput style={styles.input3} keyboardType="phone-pad" placeholder="Telefone" />
        </View>
        <View style={styles.formGroup3}>
          <Text style={styles.label3}>Mensagem:</Text>
          <TextInput style={[styles.input, styles.textArea3]} multiline={true} placeholder="Mensagem" />
        </View>
        <TouchableOpacity style={styles.button3} onPress={() => alert('Mensagem Enviada')}>
          <Text style={styles.buttonText3}>Enviar mensagem</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.footer3}>
      <Text style={styles.footerText3}>© 2024 BOMBOIDI. Todos os direitos reservados.</Text>
    </View>
  </View>
  );
}

function Localizacao({ navigation }) {
  return (
    <View style={styles.container4}>
      <ImageBackground
        source={{ uri: 'https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_XL.jpg' }}
        style={styles.backgroundImage4}>
      <View style={styles.header1}>
        <Text style={styles.headerText1}>BOMBOIDI®</Text>
      </View>
      <View style={styles.nav1}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem1}>INÍCIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
          <Text style={styles.navItem1}>CONTATO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
          <Text style={styles.navItem1}>RESERVA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.navItem1}>CARDÁPIO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Localizacao')}>
          <Text style={styles.navItem1}>LOCALIZAÇÃO</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mapSection}>
          <Image
            source={{ uri: 'https://s2-g1.glbimg.com/S7ZmwrmFmvQwDeUH9Wn8k-uMzFg=/0x0:1068x597/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/b/d/OpxTlKRiApgfB4yCYC4g/arte-sumare.jpg' }}
            style={styles.mapImage}
          />
          <Image
            source={{ uri: 'https://s2-g1.glbimg.com/S7ZmwrmFmvQwDeUH9Wn8k-uMzFg=/0x0:1068x597/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/b/d/OpxTlKRiApgfB4yCYC4g/arte-sumare.jpg' }}
            style={styles.centeredImage}
          />
        </View>
      </ImageBackground>
      <View style={styles.footer4}>
          <Text style={styles.footerText4}>© 2024 BOMBOIDI. Todos os direitos reservados.</Text>
        </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contato" component={Contato} />
        <Stack.Screen name="Reservas" component={Reservas} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Localizacao" component={Localizacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  const styles = StyleSheet.create({
    nav1: {
      backgroundColor: '#333',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
    },
    navItem1: {
      color: '#fff',
    },
    container9: {
      flex: 1,
    },
    container1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 1000,
    },
    header1: {
      backgroundColor: '#ffffff',
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderBottomWidth: 2,
      borderBottomColor: '#ccc',
      alignItems: 'center',
      marginTop:-550,
    },
    headerText1: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#333',
      textTransform: 'uppercase',
    },
    content1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    form1: {
      width: '80%',
      marginBottom: 20,
      backgroundColor: 'rgba(39, 34, 34, 0.749)',
      padding: 20,
      borderRadius: 8,
      shadowColor: '#000',
    },
    label1: {
      marginBottom: 5,
      color: 'white',
      marginBottom: 5,
      fontSize: 16,
    },
    input1: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      width: '100%',
      marginBottom: 15,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
      width: '100%',
      backgroundColor: '#ffffff',
    },
    button1: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText1: {
      color: 'white',
      fontWeight: 'bold',
    },
    footer1: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: 'black',
    },
    footerText1: {
      fontSize: 12,
      color: 'white',
    },
    backgroundImage1: {
      flex: 1,
      width: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
  
  
  // Contato styles
 
          
  container3: {
    flex: 1,
    flexDirection: 'column',
  },
  header3: {
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    color: '#010101',
  },
  headerText3: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nav3: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 10,
  },
  navItem3: {
    marginHorizontal: 10,
    color: '#fffefe',
    fontWeight: 'bold',
  },
  backgroundImage3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contact3: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    maxWidth: 400,
    width: '100%',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 2,
  },
  formGroup3: {
    marginBottom: 15,
    width: '100%',
  },
  label3: {
    marginBottom: 5,
  },
  input3: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  textArea3: {
    height: 100,
  },
  button3: {
    width: '100%',
    padding: 10,
    backgroundColor: '#ff0000',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText3: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer3: {
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#0d0d0d',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerText3: {
    color: '#f8f4f4',
  },


  // Localizacao styles
  container4: {
    flex: 1,
  },
  header4: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    paddingVertical: 20, // Adicionando espaçamento vertical ao cabeçalho
    paddingHorizontal: 50,
  },
  headerText4: {
    color: '#000',
    fontSize: 40,
    fontWeight: "bold"
  },
  nav4: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#333',
  },
  centeredImage: {
    marginTop: 20,
    width: 900, // Altere conforme necessário
    height: 500, // Altere conforme necessário
    position: 'absolute',
    alignSelf: 'center',
    
  },
  navItem4: {
    color: '#fff',
  },
  map4: {
    flex: 1,
    resizeMode: 'contain',
    marginVertical: 20, // Adicionando espaçamento vertical à imagem
    
  },
  backgroundImage4: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  footer4: {
    paddingVertical: 20, // Adicionando espaçamento vertical ao rodapé
    alignItems: 'center',
    backgroundColor: 'black',
  },
  footerText4: {
    fontSize: 12,
    color: 'white',
  },

  // Menu styles
  container8: {
    flex: 1,
  },
  header8: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText8: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  nav8: {
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navItem8: {
    color: '#fff',
    fontSize: 18,
  },
  main8: {
    flex: 1,
    padding: 20,
  },
  searchSection8: {
    marginBottom: 20,
  },
  input8: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  menuSection8: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  productContainer8: {
    width: '45%',
    marginBottom: 20,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  image8: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title8: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#333',
    color: '#fff',
  },
  // Home styles
 
  backgroundImage13: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay13: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Overlay escura para melhor contraste
  },
  nav: {
    backgroundColor13: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  backgroundImage13: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay13: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Overlay escura para melhor contraste
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav13: {
    backgroundColor: 'transparent', // tornar o fundo transparente
  },
  logo13: {
    fontSize: 36, // aumentar o tamanho do texto
    fontWeight: 'bold',
    color: '#fff', // cor branca
    textAlign: 'center', // alinhar ao centro
  },
  content13: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu13: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  navItem13: {
    fontSize: 18,
    color: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  about13: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  aboutTitle13: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  aboutText13: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  foto13: {
    width: '90%',
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  },

  navItem1: {
    color: '#fff',
    fontSize: 20,
    marginHorizontal: 20,
  },
  

    
  menuSection10: {
    marginBottom: 20,
  },
  productContainer10: {
    marginBottom: 10,
  },

  image10: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title10: {
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    margin: 0,
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#A18E5C',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  paragraph: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginVertical: 20,
  },
  content: {
    // Adicione estilos para o conteúdo, se necessário
  },
  footer: {
    backgroundColor: '#A18E5C',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,
  },

});



export default App;