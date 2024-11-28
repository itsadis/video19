import React from 'react';
import { Text, View, Image } from 'react-native';

const MateriflexBoox = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>  {/* Mengubah background utama */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'red',
          alignItems: 'flex-start',
          justifyContent: 'space-around',
        }}
      >
        <View style={{ backgroundColor: 'white', width: 60, height: 50 }} />
        <View style={{ backgroundColor: 'pink', width: 60, height: 50 }} />
        <View style={{ backgroundColor: 'pink', width: 60, height: 50 }} />
        <View style={{ backgroundColor: 'white', width: 60, height: 50 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <Image
          source={{
            uri: 'https://mitrapost.com/wp-content/uploads/2023/08/kota-pati.jpg',
          }}
          style={{ width: 100, height: 100, borderRadius: 50, marginRight: 25 }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Adisty Nurharumandari
          </Text>
          <Text>Sekolah Tinggi Teknik Pati</Text>
        </View>
      </View>
    </View>
  );
};

export default MateriflexBoox;
