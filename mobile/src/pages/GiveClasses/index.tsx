import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImg from '../../assets/images/give-classes-background.png'

import styles from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.content}
        source={giveClassesBgImg}
        resizeMode="contain"
      >
        <Text style={styles.title}>Do you want to be a Proffy?</Text>
        <Text style={styles.description}>You need to register as a teacher in the web platform.</Text>
      </ImageBackground>

      <RectButton
        style={styles.okButton}
        onPress={handleNavigateBack}
      >
        <Text style={styles.okButtonText}>Ok</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
