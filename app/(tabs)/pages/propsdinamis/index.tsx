import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 110, height: 110, borderRadius: 110 / 2}}
      />
      <Text style={{maxWidth: 150, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="MoonLight Channel"
            gambar="https://i.pinimg.com/736x/b8/51/d5/b851d56f12996fc4fc17f5b83df8ee73.jpg"
          />
          <Story
            judul="Kumaha Coding"
            gambar="https://i.pinimg.com/736x/f2/68/d0/f268d00826695db3b7cda9a58683cc73.jpg"
          />
          <Story
            judul="MuMei"
            gambar="https://i.pinimg.com/736x/62/04/d6/6204d6e547d18364f8c99a24060fcaa5.jpg"
          />
          <Story
            judul="BloddyHeart"
            gambar="https://i.pinimg.com/736x/2e/f0/6a/2ef06aacb1d2add3dd9f15eb77ef6cf8.jpg"
          />
          <Story
            judul="LiNyi"
            gambar="https://i.pinimg.com/736x/1b/2c/28/1b2c2840ea33de2f4c01b28c8baa65bd.jpg"
          />
          <Story
            judul="HeYuu"
            gambar="https://i.pinimg.com/736x/a7/d8/cb/a7d8cb7c2f53e03af21ac4b4d7d893bc.jpg"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Warna background putih
    padding: 10,
  },
  textTitle: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
});
