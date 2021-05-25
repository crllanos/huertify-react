import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function Tab3Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proximamente...</Text>
      <View style={styles.separator} lightColor="#51b749" darkColor="#51b749" />

      <View style={styles.mi_lista}>
        <Text style={styles.getStartedText}> - El clima. </Text>
        <Text style={styles.getStartedText}> - Libro del campo. </Text>
        <Text style={styles.getStartedText}> - Lombricultura. </Text>
        <Text style={styles.getStartedText}> + Seguimiento ¿agropecuario? </Text>
        <Text style={styles.getStartedText}> + Banco ¿germoplasma? </Text>
        <Text style={styles.getStartedText}> + Segregantes. </Text>
        <Text style={styles.getStartedText}> + Selección de ¿segregantes? </Text>
        <Text style={styles.getStartedText}> * Ensayos. </Text>
      </View>

      <EditScreenInfo path="@huertify" />
    </View>
  );
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#51b749'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    color:'#000'
  },
  mi_lista: {
    textAlign:'left',
    alignItems:'flex-start',
    justifyContent: 'flex-start',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});