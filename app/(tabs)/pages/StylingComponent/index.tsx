import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const StylingComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Styling Component</Text>
      <View style={styles.box} />
      <View style={styles.card}>
        <Image
          source={require('../StylingComponent/macbook.jpg')}
          style={styles.image}
        />
        <Text style={styles.productName}>Macbook Pro 2019</Text>
        <Text style={styles.productPrice}>Rp. 25.000</Text>
        <Text style={styles.location}>Jakarta Barat</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Agar mengisi layar penuh
    backgroundColor: '#FFFFFF', // Latar belakang putih
    padding: 20,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 20,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#0abde3',
    borderWidth: 2,
    borderColor: '#5f27cd',
    marginTop: 20,
    marginLeft: 20,
  },
  card: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 10,
    marginTop: 20,
  },
  image: {
    width: 107,
    height: 109,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 12,
  },
  location: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default StylingComponent;
