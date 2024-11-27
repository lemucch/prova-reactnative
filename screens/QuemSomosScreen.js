import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SobreMimScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.aboutCard}>
        <Text style={styles.aboutText}>
          Olá! Eu sou o Geovani. Especialista em criação de conteúdo digital, design gráfico e desenvolvimento de sites. Tenho experiência em todos os estágios de projetos criativos e tecnológicos, desde o conceito até a execução. Estou aberto a colaborar em novos desafios que impulsionem minhas habilidades e gerem impacto positivo.
        </Text>

        <View style={styles.aboutButtons}>
          <TouchableOpacity style={[styles.button, styles.githubButton]}>
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.whatsappButton]}>
            <Text style={styles.buttonText}>Entre em contato</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F0F2F5',
  },
  aboutCard: {
    maxWidth: '90%',
    margin: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  aboutButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
  },
  githubButton: {
    backgroundColor: '#333',
  },
  whatsappButton: {
    backgroundColor: '#25d366',
  },
});

export default SobreMimScreen;
