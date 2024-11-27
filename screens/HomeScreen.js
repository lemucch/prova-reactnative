import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NoticiasScreen from './NoticiasScreen'; // Importando corretamente o componente NoticiasScreen

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Seção do Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerHeading}>Fernando Henrique Boschini Lemucch</Text>
        <Text style={styles.bannerSubheading}>Desenvolvedor Full Stack | Designer Gráfico | Criador de Conteúdo</Text>
      </View>

      {/* Seção do Perfil */}
      <View style={styles.profile}>
        <View style={styles.profileCard}>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri: 'https://w7.pngwing.com/pngs/723/455/png-transparent-homer-simpson-bart-simpson-lisa-simpson-marge-simpson-peter-griffin-simpsons-homer-simpson-face-heroes-springfield-thumbnail.png',
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileText}><strong>Idade:</strong> 40</Text>
            <Text style={styles.profileText}><strong>Endereço:</strong> Maringá, Paraná, Brasil</Text>
            <Text style={styles.profileText}><strong>E-mail:</strong> fernando.henrique@email.com</Text>
            <Text style={styles.profileText}><strong>Telefone:</strong> +55 41 99999-9999</Text>

            <View style={styles.socialIcons}>
              <Ionicons name="logo-facebook" size={30} color="#ccc" onPress={() => Linking.openURL('https://facebook.com')} />
              <Ionicons name="logo-twitter" size={30} color="#ccc" onPress={() => Linking.openURL('https://twitter.com')} />
              <Ionicons name="logo-instagram" size={30} color="#ccc" onPress={() => Linking.openURL('https://instagram.com')} />
              <Ionicons name="logo-linkedin" size={30} color="#ccc" onPress={() => Linking.openURL('https://linkedin.com')} />
              <Ionicons name="logo-github" size={30} color="#ccc" onPress={() => Linking.openURL('https://github.com')} />
            </View>
          </View>
        </View>
        
        {/* Aqui é onde o componente NoticiasScreen deve ser usado */}
        <NoticiasScreen /> {/* Corrigido o nome do componente para NoticiasScreen */}

      </View>
    </ScrollView>
  );
};

export default HomeScreen;

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    color: '#fff',
  },
  banner: {
    backgroundColor: '#282828',
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  bannerSubheading: {
    fontSize: 18,
    color: '#ccc',
    marginTop: 10,
  },
  profile: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileCard: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  },
  profileImage: {
    marginBottom: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 5,
    borderColor: '#333',
  },
  profileInfo: {
    marginBottom: 20,
  },
  profileText: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 5,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 15,
  },
  brandsSection: {
    backgroundColor: '#f4f4f4',
    paddingVertical: 40,
    alignItems: 'center',
  },
  brandsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  brands: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  brandImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});
