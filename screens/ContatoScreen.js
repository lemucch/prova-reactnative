import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, Picker, StyleSheet } from 'react-native';

const ContatoScreen = () => {
  const [nome, setNome] = useState('');
  const [interesse, setInteresse] = useState('');
  const [servico, setServico] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nomeInputRef = useRef(null);
  
  useEffect(() => {
    nomeInputRef.current?.focus();
  }, []);

  const opcoesServicos = {
    'Designer Gráfico': ['Logotipo', 'Cartão de Visitas', 'Banner'],
    'Web designer': ['Site Institucional', 'Landing Page'],
    'Edição de Áudio': ['Podcast', 'Áudio Publicitário'],
    'Edição de Vídeo': ['Vídeo Corporativo', 'Animação'],
  };

  const handleSubmit = () => {
    if (!nome || !interesse || !servico || !mensagem) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const numeroWhatsApp = '44998077649'; // Substitua pelo número real
    const texto = `Olá, meu nome é ${nome}. Tenho interesse em ${interesse} (${servico}). Minha mensagem: ${mensagem}`;
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(texto)}`;
    
    // Abre o link do WhatsApp
    window.open(url, '_blank');
    
    // Resetar campos
    setSubmitted(true);
    setNome('');
    setInteresse('');
    setServico('');
    setMensagem('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicite um Orçamento</Text>

      {/* Campo de nome */}
      <TextInput
        ref={nomeInputRef}
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />

      {/* Seletor de interesse */}
      <Picker
        style={styles.picker}
        selectedValue={interesse}
        onValueChange={setInteresse}>
        <Picker.Item label="Tenho Interesse:" value="" />
        <Picker.Item label="Designer Gráfico" value="Designer Gráfico" />
        <Picker.Item label="Web Designer" value="Web designer" />
        <Picker.Item label="Edição de Áudio" value="Edição de Áudio" />
        <Picker.Item label="Edição de Vídeo" value="Edição de Vídeo" />
      </Picker>

      {/* Seletor de serviço baseado no interesse */}
      <Picker
        style={styles.picker}
        selectedValue={servico}
        onValueChange={setServico}>
        <Picker.Item label="Selecione um Serviço" value="" />
        {interesse &&
          opcoesServicos[interesse]?.map((opcao, index) => (
            <Picker.Item key={index} label={opcao} value={opcao} />
          ))}
      </Picker>

      {/* Campo de mensagem */}
      <TextInput
        style={styles.textArea}
        placeholder="Digite sua Mensagem"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
        numberOfLines={4}
      />

      {/* Botão de envio */}
      <Button title="Enviar para o WhatsApp" onPress={handleSubmit} color="#25d366" />

      {submitted && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Dados Enviados:</Text>
          <Text>Nome: {nome}</Text>
          <Text>Interesse: {interesse}</Text>
          <Text>Serviço: {servico}</Text>
          <Text>Mensagem: {mensagem}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F9FC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  picker: {
    height: 50,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    textAlignVertical: 'top',
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#E9F7EF',
    borderRadius: 8,
    elevation: 2,
  },
  resultTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ContatoScreen;
