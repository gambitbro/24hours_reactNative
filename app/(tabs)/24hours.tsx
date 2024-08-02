import { Image, StyleSheet, Platform, Text, TextInput, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const getFullName = (
  firstName: string,
  secondName: string,
  thirdName: string,
  fourthName: string,
) => {
  return firstName + ' ' + secondName + ' ' + thirdName + ' ' + fourthName;
};

type CatProps = {
  name: string;
}

const Cat = (props: CatProps) => {
  return (
    <Text>Hello! I'm {props.name}!</Text>
  );
};

export default function HomeScreen(){
  return (
    <ParallaxScrollView 
    headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47'}}
    headerImage={
      <Image
          source={require('@/assets/images/20180608_041342.png')}
          style={styles.reactLogo}
      />
    }
    >

    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">{getFullName('24', 'YOU', 'CAN', 'FIND')}</ThemedText>  
    </ThemedView>
    
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="title">[Nearby]</ThemedText>  
    </ThemedView>

    <ThemedView style={styles.stepContainer}>
      <ThemedText type="title">[EXIT1]</ThemedText>  
    </ThemedView>

    <ThemedView style={styles.stepContainer}>
      <ThemedText type="title">[EXIT2]</ThemedText>  
    </ThemedView>

    <View>
      <Text>Hello, I am ...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'red',
          borderWidth: 1,
        }}
        defaultValue="Name Me!"
      />
    </View>
    
    <View>
      <Cat name="Rosa"/>
    </View>
    
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 380,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

